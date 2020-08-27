import React from "react";

import "./styles.scss";
import { DataRow, TableHeading } from "../index";

const BooksTable = () => {
  const books = [
    { id: 1, title: "Beast Quest", author: "Adam Blade" },
    { id: 2, title: "Diary of a Wimpy Kid", author: "Jeff Kinney" },
    { id: 3, title: "Harry Potter", author: "JK Rowling" },
  ];

  return (
    <div className="table-container">
      <div className="table-heading-first">
        <TableHeading></TableHeading>
      </div>
      {books.map((book) => {
        return (
          <div className="table-row">
            {/* TODO - optimise unnessary rendering in higher viewport */}
            <TableHeading></TableHeading>
            <DataRow data={book}></DataRow>
          </div>
        );
      })}
    </div>
  );
};

export default BooksTable;
