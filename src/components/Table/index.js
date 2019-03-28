import React from "react";
import Column from "./Column";
import { WindowSizeConsumer } from '../../containers/WindowSizeContext';

import './index.css';

const Table = ({ data = [] }) => {
  
  return (
    <WindowSizeConsumer>
      { ({windowSize}) => (
      <div className="table" style={{width: windowSize.width}}>
        {data.map(d => (
          <Column {...d} />
        ))}
      </div>
          )
        }
    </WindowSizeConsumer>
  );
};

export default Table;
