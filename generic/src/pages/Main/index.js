import React, { useEffect } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { setMobileNavVisibility } from "../../reducers/Layout";
import { withRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import SideBar from "../../components/SideBar";

import {
  Dashboard,
  Components,
  UserProfile,
  MapsPage,
  Forms,
  Charts,
  Calendar,
  Tables,
} from "../";

const Main = ({ mobileNavVisibility, hideMobileMenu, history }) => {
  useEffect(() => {
    return history.listen(() => {
      if (mobileNavVisibility === true) {
        hideMobileMenu();
      }
    });
  }, [history, mobileNavVisibility, hideMobileMenu]);

  return (
    <div className={cx({ "nav-open": mobileNavVisibility })}>
      <div className="wrapper">
        <div className="close-layer" onClick={hideMobileMenu}></div>
        <SideBar />

        <div className="main-panel">
          <Header />
          <Route path="/" component={Dashboard} />
          <Route path="/components" component={Components} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/forms" component={Forms} />
          <Route path="/tables" component={Tables} />
          <Route path="/maps" component={MapsPage} />
          <Route path="/charts" component={Charts} />
          <Route path="/calendar" component={Calendar} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = ({ Layout: { mobileNavVisibility } }) => ({
  mobileNavVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false)),
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));
