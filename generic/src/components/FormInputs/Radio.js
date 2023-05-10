import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uncheckImage from "assets/images/radio-1.svg";
import checkImage from "assets/images/radio-2.svg";

const Radio = ({
  input,
  label,
  meta: { touched, error, warning },
  disabled,
}) => {
  const radioClassNames = classNames("radio", {
    checked: input.checked,
    disabled,
  });

  return (
    <label className={radioClassNames}>
      <span className="icons">
        <img
          className="first-icon"
          src={uncheckImage}
          width={17}
          height={17}
          alt="Unchecked radio button"
        />
        <img
          className="second-icon"
          src={checkImage}
          width={17}
          height={17}
          alt="Checked radio button"
        />
      </span>
      <input {...input} type="radio" data-toggle="radio" disabled={disabled} />
      {label}
    </label>
  );
};

Radio.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  meta: {},
  disabled: false,
};

export default React.memo(Radio);
