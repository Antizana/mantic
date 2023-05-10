import React, { useCallback, useRef } from "react";
import cx from "classnames";

const Tags = ({
  tags = [],
  theme = "azure",
  fill = false,
  onAdd,
  onRemove,
}) => {
  const inputRef = useRef();

  const handleAdd = useCallback(
    (e) => {
      if (e.keyCode === 13 && e.target.value) {
        onAdd(e.target.value);
        e.target.value = "";
      }
    },
    [onAdd]
  );

  const handleRemove = useCallback(
    (id) => {
      onRemove(id);
    },
    [onRemove]
  );

  return (
    <div
      className={cx("tagsinput", `tag-${theme}`, {
        "tag-fill": fill,
      })}
      style={{ height: "100%" }}
    >
      {tags.map((tag) => (
        <span className="tag" key={tag.id}>
          <span>{tag.text}</span>&nbsp;
          <a
            className="tagsinput-remove-link"
            onClick={() => handleRemove(tag.id)}
          >
            <i className="fa fa-times"></i>
          </a>
        </span>
      ))}
      <div className="tagsinput-add-container">
        <div className="tagsinput-add">
          <i className="fa fa-plus"></i>
        </div>
        <input
          ref={inputRef}
          defaultValue=""
          style={{ color: "rgb(102, 102, 102)", width: 50 }}
          onKeyDown={handleAdd}
        />
      </div>
    </div>
  );
};

export default Tags;
