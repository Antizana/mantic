const __ = require(`${__dirname}/../func.js`);
const { Client } = require("pg");

const dateOptions = {
  hour12: true,
  month: "2-digit",
  year: "numeric",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

class BaseHandler {
  constructor(request, globals) {
    this.request = request;
    this.globals = globals;
    this.client = null;
    this.models = {};

    if (this.request.body) {
      try {
        this.request.body = JSON.parse(this.request.body);
      } catch (e) {}
    }
  }

  async handle() {
    this.env = this.isProd() ? "PRD" : "DEV";
    console.log("ALIAS:" + this.env);
    console.log("this.request.body :" + this.request.body);
    await this.initDb();

    let input = {};
    let curDate = new Date();
    this.ts = curDate.toLocaleDateString("en-US", dateOptions);

    input["updated_on"] = this.ts;

    let res = null;
    let err = null;

    try {
      res = await this._handle(input);
    } catch (e) {
      err = e;
      log.error("ERROR processing :" + e);
    } finally {
      await this.shutdown();
    }

    if (err) {
      throw err;
    }

    return res;
  }

  isProd() {
    return (
      this.request.hasOwnProperty("stageVariables") &&
      this.request.stageVariables.lambdaAlias &&
      this.request.stageVariables.lambdaAlias == "PRD"
    );
  }

  async initDb() {
    let {
      psqlConnectionStringDev,
      psqlHostDev,
      psqlPortDev,
      psqlDatabaseNameDev,
      psqlUserNameDev,
      psqlPasswordDev,
      psqlConnectionStringPrd,
      psqlHostPrd,
      psqlPortPrd,
      psqlDatabaseNamePrd,
      psqlUserNamePrd,
      psqlPasswordPrd,
    } = this.globals;

    const connectionString = this.isProd()
      ? psqlConnectionStringPrd
      : psqlConnectionStringDev;

    const host = this.isProd() ? psqlHostPrd : psqlHostDev;
    const port = this.isProd() ? psqlPortPrd : psqlPortDev;
    const databaseName = this.isProd()
      ? psqlDatabaseNamePrd
      : psqlDatabaseNameDev;
    const userName = this.isProd() ? psqlUserNamePrd : psqlUserNameDev;
    const password = this.isProd() ? psqlPasswordPrd : psqlPasswordDev;

    try {
      this.client = new Client({
        connectionString,
        host,
        port,
        database: databaseName,
        user: userName,
        password,
      });

      await this.client.connect();
      console.log("Successfully connected to database");
    } catch (e) {
      console.error("Unable to connect to database", e);
      throw e;
    }
  }

  async shutdown() {
    if (this.client) {
      this.client.end();
      this.client = null;
    }
  }

  generateMemcacheKey(key) {
    return `${this.env}_${key}`;
  }

  const(name, value) {
    this[name] = value;
  }
}

module.exports = exports.BaseHandler = BaseHandler;
