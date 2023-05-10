import React, { useCallback } from "react";

const SwitchControl = ({ value, onChange, onText = "ON", offText = "OFF" }) => {
  const handleToggle = useCallback(() => {
    onChange(!value);
  }, [onChange, value]);

  return (
    <div className="switch has-switch">
      <div
        className={`switch-animate switch-${value ? "on" : "off"}`}
        onClick={handleToggle}
      >
        <span className="switch-left">{onText}</span>
        <label>&nbsp;</label>
        <span className="switch-right">{offText}</span>
      </div>
    </div>
  );
};

export default SwitchControl;
