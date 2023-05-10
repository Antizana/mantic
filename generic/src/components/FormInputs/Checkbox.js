import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import uncheckImage from "assets/images/checkbox-1.svg";
import checkImage from "assets/images/checkbox-2.svg";

const Checkbox = ({
  input,
  label,
  meta: { touched, error, warning },
  disabled,
}) => {
  const checkboxClassNames = classNames("checkbox", {
    checked: input.checked,
    disabled,
  });

  return (
    <label className={checkboxClassNames}>
      <span className="icons">
        <img
          className="first-icon"
          src={uncheckImage}
          width={17}
          height={17}
          alt="Unchecked checkbox"
        />
        <img
          className="second-icon"
          src={checkImage}
          width={17}
          height={17}
          alt="Checked checkbox"
        />
      </span>
      <input
        {...input}
        type="checkbox"
        data-toggle="checkbox"
        disabled={disabled}
      />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
  }),
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  meta: {},
  disabled: false,
};

export default React.memo(Checkbox);
