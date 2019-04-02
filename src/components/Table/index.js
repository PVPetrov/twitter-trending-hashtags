import React from "react";
import Column from "./Column";

import './index.css';

const Table = ({ data = [] }) => (
  <div className="table">
    {data.map((d,i) => (
      <Column key={`table-column-${i}`} {...d} />
    ))}
  </div>
)

export default Table;
