import React from "react";
import Cell from "./Cell";

const Column = ({ locations = {}, trends = [] }) => (
  <div className="column">
    <Cell header={true} r={{ name: locations[0].name }} />
    {trends.map(el => (
      <Cell key={`${locations.name}-${el.name}`} r={el} />
    ))}
  </div>
);

export default Column;