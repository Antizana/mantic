import React from "react";
import TextInput from "./TextInput";
import Checkbox from "./Checkbox";
import Radio from "./Radio";

const renderField = (props) => {
  const { type } = props;

  switch (type) {
    case "email":
    case "password":
    case "text":
    case "number":
      return <TextInput {...props} />;
    case "checkbox":
      return <Checkbox {...props} />;
    case "radio":
      return <Radio {...props} />;
    default:
      return null;
  }
};

export default renderField;
