import React, { useState } from "react";
import generateData from "../generateData";
import Switch from "components/Switch";

const TableWithSwitch = () => {
  const [items, setItems] = useState(generateData());

  const toggleActive = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          item.active = !item.active;
        }
        return item;
      })
    );
  };

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Table with Switches</h4>
        <p className="category">Here is a subtitle for this table</p>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th className="text-right">Salary</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td className="text-right">$ {item.salary}</td>
                <td>
                  <Switch
                    value={item.active}
                    onChange={() => toggleActive(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithSwitch;
