import React from "react";
import "./styles.scss";
const DataRow = (props: any) => {
  const { data } = props;
  return (
    <div className="data-container">
      <span className="col">{data.id}</span>
      <span className="col">{data.title}</span>
      <span className="col">{data.author}</span>
    </div>
  );
};

export default DataRow;
