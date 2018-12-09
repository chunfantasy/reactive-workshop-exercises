import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './game-of-life.css';

const GameOfLife = ({ n, width, height }) => (
  <div>
    <div style={{ width: n * width, height: n * height }}>
      {Array.from({ length: n * n })
        .map((_, index) => ({ row: index % n, column: Math.floor(index / n) }))
        .map(({ row, column }) => (
          <div
            className={classnames({ cell: true, alive: (row + column) % 2 })}
            style={{ top: 20 * row, left: 20 * column, width, height }}
          />
        ))}
    </div>
    <button>Tick</button>
  </div>
);

GameOfLife.propTypes = {
  n: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

GameOfLife.defaultProps = {
  n: 10,
  width: 20,
  height: 20
};

export default GameOfLife;
