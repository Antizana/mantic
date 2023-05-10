import React, { memo } from "react";
import profileImage from "../../assets/images/faces/face-3.jpg";
import image from "https://i.pravatar.cc/400?img=8";

const UserInfo = memo(() => (
  <div className="card card-user">
    <div className="image">
      <img src={image} alt="..." />
    </div>
    <div className="content">
      <div className="author">
        <a href="#">
          <img
            className="avatar border-gray"
            src={profileImage}
            alt="Edwin Smith"
          />

          <h4 className="title">
            Edwin Smith
            <br />
            <small>Edwin123</small>
          </h4>
        </a>
      </div>
      <p className="description text-center">
        "Bikes roaring, <br />
        their riders thirsty for speed, <br />
        I'm on my two-wheeled machine."
      </p>
    </div>
    <hr />
    <div className="text-center">
      <button href="#" className="btn btn-simple">
        <i className="fa fa-facebook-square"></i>
      </button>
      <button href="#" className="btn btn-simple">
        <i className="fa fa-twitter"></i>
      </button>
      <button href="#" className="btn btn-simple">
        <i className="fa fa-google-plus-square"></i>
      </button>
    </div>
  </div>
));

export default UserInfo;
