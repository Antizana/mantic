import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { connect } from "react-redux";
import cx from "classnames";

const UserInfo = ({ user }) => {
  const [isShowingUserMenu, setIsShowingUserMenu] = useState(false);

  return (
    <div className="user-wrapper">
      <div className="user">
        <img src={user.image} alt={user.name} className="photo" />
        <div className="userinfo">
          <div className="username">{user.name}</div>
          <div className="title">Admin</div>
        </div>
        <span
          onClick={() => setIsShowingUserMenu(!isShowingUserMenu)}
          className={cx("pe-7s-angle-down collapse-arrow", {
            active: isShowingUserMenu,
          })}
        ></span>
      </div>
      <Collapse in={isShowingUserMenu}>
        <ul className="nav user-nav">
          <li>
            <a href="#">My Profile</a>
          </li>
          <li>
            <a href="#">Edit Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </Collapse>
    </div>
  );
};

const mapStateToProps = ({ Auth: { user } }) => ({ user });

export default connect(mapStateToProps)(UserInfo);
