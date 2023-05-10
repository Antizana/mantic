import React from "react";

const Pagination = () => {
  const renderPaginationList = (colorClass) => (
    <ul className={`pagination ${colorClass}`}>
      <li>
        <a href="#">«</a>
      </li>
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li className="active">
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">5</a>
      </li>
      <li>
        <a href="#">»</a>
      </li>
    </ul>
  );

  return (
    <div>
      <div className="header">
        <h4 className="title">Pagination</h4>
      </div>

      <div className="content">
        <ul>
          <li>pagination</li>
          <li>pagination-primary</li>
          <li>pagination-success</li>
          <li>pagination-info</li>
          <li>pagination-warning</li>
          <li>pagination-danger</li>
        </ul>

        {renderPaginationList("pagination")}
        {renderPaginationList("pagination-primary")}
        {renderPaginationList("pagination-success")}
        {renderPaginationList("pagination-info")}
        {renderPaginationList("pagination-warning")}
        {renderPaginationList("pagination-danger")}
        {renderPaginationList("pagination-no-border")}
      </div>
    </div>
  );
};

export default Pagination;
