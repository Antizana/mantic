import React from "react";
import StripedTable from "./StripedTable";
import PlainBackgroundTable from "./PlainBackgroundTable";

const RegularTables = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <StripedTable data={generateData(5)} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <PlainBackgroundTable data={generateData(5)} />
      </div>
    </div>
  </div>
);

export default RegularTables;
