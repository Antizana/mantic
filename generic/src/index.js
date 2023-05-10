import React, { StrictMode, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./assets/styles/base.scss";
import "sweetalert/dist/sweetalert.css";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();
const rootElement = document.getElementById("root");

const Main = lazy(() => import("./pages/Main"));

const renderApp = (Component) => {
  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Component />
          </Suspense>
        </HashRouter>
      </Provider>
    </StrictMode>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./pages/Main", () => {
    const NextApp = require("./pages/Main").default;
    renderApp(NextApp);
  });
}

registerServiceWorker();
