import React, { useCallback } from "react";

const StripedTable = React.memo(({ data }) => {
  const renderRow = useCallback(
    ({ id, name, salary, country, city }) => (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>$ {salary}</td>
        <td>{country}</td>
        <td>{city}</td>
      </tr>
    ),
    []
  );

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">Striped Table with Hover</h4>
        <p className="category">Here is a subtitle for this table</p>
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Country</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{data.map(renderRow)}</tbody>
        </table>
      </div>
    </div>
  );
});

export default StripedTable;
