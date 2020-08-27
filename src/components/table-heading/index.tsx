import React from "react";
import "./styles.scss";

const TableHeading = () => {
  return (
    <div className="heading-container">
      <span className="col">Id</span>
      <span className="col">Title</span>
      <span className="col">Author</span>
    </div>
  );
};

export default TableHeading;
