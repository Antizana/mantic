import React from "react";
import { Route, Switch } from "react-router-dom";
import GoogleMap from "./GoogleMap";
import VectorMap from "./VectorMap";

const MapsPage = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Switch>
        <Route path={`${match.url}/google-map`} component={GoogleMap} />
        <Route path={`${match.url}/vector-map`} component={VectorMap} />
      </Switch>
    </div>
  </div>
);

export default MapsPage;
