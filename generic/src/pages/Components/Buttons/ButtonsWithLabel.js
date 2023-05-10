import React from "react";

const buttonsData = [
  { type: "success", icon: "fa fa-check", label: "Success" },
  { type: "danger", icon: "fa fa-times", label: "Danger" },
  { type: "info", icon: "fa fa-exclamation", label: "Info" },
  { type: "warning", icon: "fa fa-warning", label: "Warning" },
  {
    type: "default",
    icon: "fa fa-arrow-left",
    label: "Left",
    labelPosition: "left",
  },
  {
    type: "default",
    icon: "fa fa-arrow-right",
    label: "Right",
    labelPosition: "right",
  },
];

const ButtonsWithLabel = () => (
  <div>
    <div className="header">
      <h4 className="title">Buttons with Label</h4>
    </div>
    <div className="content buttons-with-margin">
      {buttonsData.map(({ type, icon, label, labelPosition = "right" }) => (
        <button
          key={`${type}-${label}`}
          type="button"
          className={`btn btn-wd btn-${type}`}
        >
          {labelPosition === "left" && (
            <span className="btn-label btn-label-left">
              <i className={icon}></i>
            </span>
          )}
          {label}
          {labelPosition === "right" && (
            <span className="btn-label btn-label-right">
              <i className={icon}></i>
            </span>
          )}
        </button>
      ))}
    </div>
  </div>
);

export default ButtonsWithLabel;
