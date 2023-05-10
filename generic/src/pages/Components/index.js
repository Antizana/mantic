import React from "react";
import { Route } from "react-router-dom";
import Buttons from "./Buttons";
import Grid from "./Grid";
import Icons from "./Icons";
import Notifications from "./Notifications";
import Panels from "./Panels";
import SweetAlert from "./SweetAlert";
import Typography from "./Typography";

const components = [
  { path: "/buttons", component: Buttons },
  { path: "/grid", component: Grid },
  { path: "/icons", component: Icons },
  { path: "/notifications", component: Notifications },
  { path: "/panels", component: Panels },
  { path: "/sweetalert", component: SweetAlert },
  { path: "/typography", component: Typography },
];

const Components = ({ match }) => (
  <div className="content">
    {components.map((component) => (
      <Route
        key={component.path}
        path={`${match.url}${component.path}`}
        component={component.component}
      />
    ))}
  </div>
);

export default Components;
