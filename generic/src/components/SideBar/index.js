import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import UserInfo from "./UserInfo";
import Nav from "./Nav";

const SideBar = ({
  enableBackgroundImage,
  backgroundColor,
  backgroundImage,
}) => (
  <div
    className="sidebar"
    data-color={backgroundColor}
    data-image={backgroundImage}
  >
    <div className="brand">
      <a href="" className="brand-name">
        <img
          src={"https://dummyimage.com/300x100/000/fff&text=Logo"}
          alt="logo"
          className="logo"
        />
      </a>
    </div>
    <div className="sidebar-wrapper">
      <UserInfo />
      <div className="line"></div>
      <Nav />
    </div>
    <div
      className="sidebar-background"
      style={{
        backgroundImage: enableBackgroundImage && `url(${backgroundImage})`,
      }}
    ></div>
  </div>
);

const mapStateToProps = ({ ThemeOptions }) => ({
  enableBackgroundImage: ThemeOptions.enableBackgroundImage,
  backgroundColor: ThemeOptions.backgroundColor,
  backgroundImage: ThemeOptions.backgroundImage,
});

export default withRouter(connect(mapStateToProps)(SideBar));
