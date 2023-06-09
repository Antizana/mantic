import React, { useMemo } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const MobileMenu = ({
  location: { pathname },
  backgroundColor,
  backgroundImage,
}) => {
  const activeClass = useMemo(() => "active", []);

  return (
    <div>
      <div
        className="mobile-nav collapse navbar-collapse has-image"
        data-color={backgroundColor}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="logo">
          <a href="" className="simple-text">
            Generic
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className={pathname === "/" ? activeClass : null}>
            <Link to="/">
              <i className="pe-7s-graph"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className={pathname === "/profile" ? activeClass : null}>
            <Link to="/profile">
              <i className="pe-7s-user"></i>
              <p>User Profile</p>
            </Link>
          </li>
          <li className={pathname === "/table" ? activeClass : null}>
            <Link to="/table">
              <i className="pe-7s-note2"></i>
              <p>Table List</p>
            </Link>
          </li>
          <li className={pathname === "/typography" ? activeClass : null}>
            <Link to="typography">
              <i className="pe-7s-news-paper"></i>
              <p>Typography</p>
            </Link>
          </li>
          <li className={pathname === "/icons" ? activeClass : null}>
            <Link to="/icons">
              <i className="pe-7s-science"></i>
              <p>Icons</p>
            </Link>
          </li>
          <li className={pathname === "/map" ? activeClass : null}>
            <Link to="/map">
              <i className="pe-7s-map-marker"></i>
              <p>Maps</p>
            </Link>
          </li>
          <li className={pathname === "/notifications" ? activeClass : null}>
            <Link to="notifications">
              <i className="pe-7s-bell"></i>
              <p>Notifications</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  ThemeOptions: { backgroundColor, backgroundImage },
}) => ({
  backgroundColor,
  backgroundImage,
});

export default withRouter(connect(mapStateToProps)(MobileMenu));
