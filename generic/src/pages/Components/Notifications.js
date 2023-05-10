import React, { useRef } from "react";
import NotificationSystem from "react-notification-system";

const Notifications = () => {
  const notificationSystem = useRef(null);

  const showNotification = (position) => {
    notificationSystem.current.addNotification({
      message:
        "Generic Dashboard welcomes you - an attractive React dashboard.",
      level: "success",
      autoDismiss: 0,
      position,
    });
  };

  return (
    <div className="content">
      <div className="container-fluid">
        <div className="card">
          <div className="header">
            <h4>Notifications</h4>
          </div>
          <div className="content">
            <div className="places-buttons">
              <div className="row">
                <div className="col-md-6 col-md-offset-3 text-center">
                  <h5>
                    Notifications Places
                    <p className="category">Click to view notifications</p>
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-md-offset-3">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("tl")}
                  >
                    Top Left
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("tc")}
                  >
                    Top Center
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("tr")}
                  >
                    Top Right
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-md-offset-3">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("bl")}
                  >
                    Bottom Left
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("bc")}
                  >
                    Bottom Center
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-default btn-block"
                    onClick={() => showNotification("br")}
                  >
                    Bottom Right
                  </button>
                </div>
              </div>
            </div>

            <NotificationSystem ref={notificationSystem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
