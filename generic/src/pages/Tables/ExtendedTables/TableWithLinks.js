import React, { useState, useCallback } from "react";
import generateData from "../generateData";

const TableWithLinks = React.memo(() => {
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [items, setItems] = useState(generateData());

  const deleteItem = useCallback((itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Table with Links</h4>
        <p className="category">Here is a subtitle for this table</p>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th className="text-right">Salary</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td className="text-right">$ {item.salary}</td>
                <td className="text-right">
                  <a
                    rel="tooltip"
                    className="btn btn-info btn-simple btn-xs"
                    data-original-title="View Profile"
                    onClick={() => {
                      setIsShowingAlert(true);
                      deleteItem(item.id);
                    }}
                  >
                    <i className="fa fa-remove"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default TableWithLinks;
