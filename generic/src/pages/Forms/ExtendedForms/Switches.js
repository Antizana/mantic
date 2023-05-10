import React, { useState } from "react";
import SwitchControl from "components/Switch";

const Switches = () => {
  const [defaultSwitch, setDefaultSwitch] = useState(false);
  const [plainSwitch, setPlainSwitch] = useState(false);
  const [iconSwitch, setIconSwitch] = useState(true);

  return (
    <div className="row">
      <div className="col-md-6">
        <legend>Switches</legend>
        <div className="col-md-4">
          <p>Regular:</p>
          <SwitchControl value={defaultSwitch} onChange={setDefaultSwitch} />
        </div>
        <div className="col-md-4">
          <p>Plain:</p>
          <SwitchControl
            value={plainSwitch}
            onChange={setPlainSwitch}
            onText="&nbsp;"
            offText="&nbsp;"
          />
        </div>
        <div className="col-md-4">
          <p>With icons:</p>
          <SwitchControl
            value={iconSwitch}
            onChange={setIconSwitch}
            onText={<i className="fa fa-check"></i>}
            offText={<i className="fa fa-times"></i>}
          />
        </div>
      </div>
    </div>
  );
};

export default Switches;
