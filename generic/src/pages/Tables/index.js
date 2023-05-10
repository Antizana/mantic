import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import RegularTables from "./RegularTables";
import ExtendedTables from "./ExtendedTables";
import ReactBootstrapTable from "./ReactBootstrapTable";

const Tables = () => {
  const { url } = useRouteMatch();

  return (
    <div className="content">
      <Switch>
        <Route exact path={`${url}/regular-tables`} component={RegularTables} />
        <Route
          exact
          path={`${url}/extended-tables`}
          component={ExtendedTables}
        />
        <Route
          exact
          path={`${url}/react-bootstrap-table`}
          component={ReactBootstrapTable}
        />
      </Switch>
    </div>
  );
};

export default Tables;
