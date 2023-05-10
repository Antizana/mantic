import React, { useState } from "react";
import Tags from "components/Tags";

const initialTags = [
  {
    id: 1,
    text: "minimal",
  },
  {
    id: 2,
    text: "light",
  },
  {
    id: 3,
    text: "new",
  },
  {
    id: 4,
    text: "friends",
  },
];

const TagSection = () => {
  const [tags, setTags] = useState(initialTags);

  const onAdd = (tag) => {
    const id = new Date().getTime();
    setTags([...tags, { id, text: tag }]);
  };

  const onRemove = (tagId) => {
    const newTags = tags.filter((tag) => tag.id !== tagId);
    setTags(newTags);
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <legend>Tags</legend>
        <p>Regular:</p>
        <Tags
          tags={tags}
          onAdd={onAdd}
          onRemove={onRemove}
          theme="azure"
          fill
        />
      </div>
    </div>
  );
};

export default TagSection;
