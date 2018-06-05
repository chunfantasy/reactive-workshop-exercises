import React from 'react';

const Cell = ({ width, height, isAlive, row, column, onClick }) => (
  <div
    className={'cell' + (isAlive ? ' alive' : '')}
    style={{
      top: 20 * row,
      left: 20 * column,
      width,
      height
    }}
    onClick={onClick}
  />
);

export default Cell;
