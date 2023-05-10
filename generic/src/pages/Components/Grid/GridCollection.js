import React from "react";

const Card = ({ text }) => (
  <div className="card">
    <div className="content text-center">
      <code>{text}</code>
    </div>
  </div>
);

const GridCollection = () => {
  const columns = [
    { size: "xs", total: 3 },
    { size: "sm", total: 3 },
    { size: "md", total: 3 },
    { size: "lg", total: 3 },
    { size: "mixed", total: 4 },
    { size: "offset", total: 6 },
  ];

  const generateColumn = (size, total, index) => {
    const columnClass = `col-${size}-${Math.floor(12 / total)}`;
    const offsetClass = index === total ? `col-${size}-offset-1` : "";

    return (
      <div key={index} className={`${columnClass} ${offsetClass}`}>
        <Card text={`${columnClass} ${offsetClass}`} />
      </div>
    );
  };

  return (
    <div>
      <h4 className="title">
        XS Grid <small>Always Horizontal</small>
      </h4>
      <div className="row">
        {columns
          .slice(0, 1)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>

      <h4 className="title">
        SM Grid <small>Collapsed at 768px</small>
      </h4>
      <div className="row">
        {columns
          .slice(1, 2)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>

      <h4 className="title">
        MD Grid <small>Collapsed at 992px</small>
      </h4>
      <div className="row">
        {columns
          .slice(2, 3)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>

      <h4 className="title">
        LG Grid <small>Collapsed at 1200px</small>
      </h4>
      <div className="row">
        {columns
          .slice(3, 4)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>

      <h4 className="title">
        Mixed Grid <small>Showing different sizes on different screens</small>
      </h4>
      <div className="row">
        {columns
          .slice(4, 5)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>

      <h4 className="title">
        Offset Grid <small>Adding some space when needed</small>
      </h4>
      <div className="row">
        {columns
          .slice(5, 6)
          .map((column, index) =>
            generateColumn(column.size, column.total, index)
          )}
      </div>
    </div>
  );
};

export default GridCollection;
