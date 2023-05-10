const fs = require("fs");
const path = require("path");

class Func {
  getDto = (entity, dtoObject) => {
    let dto = {};
    for (let k in dtoObject) {
      if (entity.hasOwnProperty(k)) {
        dto[dtoObject[k]] = entity[k];
      }
    }
    return dto;
  };

  isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  requireDir = (dirPath, objects = {}) => {
    if (dirPath.endsWith("/")) {
      dirPath = dirPath.slice(0, -1);
    }
    const self = this;
    fs.readdirSync(dirPath).forEach((file) => {
      const filePath = path.join(dirPath, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        const dirName = file;
        objects[dirName] = self.requireDir(filePath);
      } else if (fs.lstatSync(filePath).isFile() && file.slice(-3) === ".js") {
        const name = file.slice(0, -3);
        objects[name] = require(filePath);
      }
    });
    return objects;
  };

  getInputObject = (input, inputObject) => {
    let inputParsed = {};
    const keys = Object.keys(input);
    for (let k of keys) {
      if (inputObject.hasOwnProperty(k)) {
        inputParsed[inputObject[k]] = input[k];
      }
    }
    return inputParsed;
  };

  normalize = (tbl, k, v) => {
    const columnTypes = {
      // column types for different tables
    };
    return columnTypes[tbl][k] === "S"
      ? this.quot(v)
      : v === null || v === "" || isNaN(v)
      ? null
      : v;
  };

  quot = (v) => {
    if (v == null) {
      return "";
    }
    return `'${v.toString().replace(new RegExp("'", "g"), "''")}'`;
  };

  initModels = async (client) => {
    const models = this.requireDir(`${__dirname}/model`);
    const pAr = [];
    for (let model of Object.values(models)) {
      pAr.push(model.init(client));
    }
    await Promise.all(pAr);
    return models;
  };

  tx = async (client, callback) => {
    try {
      await client.query("BEGIN");
      const res = await callback(client);
      await client.query("COMMIT");
      return res;
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      const { release } = client;
      release();
    }
  };

  txPool = async (pool, callback) => {
    let client = null;
    try {
      client = await pool.connect();
      await client.query("BEGIN");
      const res = await callback(client);
      await client.query("COMMIT");
      return res;
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      if (client) {
        const { release } = client;
        release();
      }
    }
  };
}

module.exports = new Func();
