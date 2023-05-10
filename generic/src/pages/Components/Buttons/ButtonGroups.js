import React from "react";

const renderButtonGroup = (labels) => (
  <div className="btn-group">
    {labels.map((label, index) => (
      <button key={index} type="button" className="btn btn-default">
        {label}
      </button>
    ))}
  </div>
);

const ButtonGroups = () => (
  <div>
    <div className="header">
      <h4 className="title">Button Group</h4>
    </div>
    <div className="content">
      {renderButtonGroup(["Left", "Middle", "Right"])}
      <br />
      <br />
      {renderButtonGroup(["1", "2", "3", "4"])}
      &nbsp;
      {renderButtonGroup(["5", "6", "7"])}
      &nbsp;
      {renderButtonGroup(["8"])}
    </div>
  </div>
);

export default ButtonGroups;
