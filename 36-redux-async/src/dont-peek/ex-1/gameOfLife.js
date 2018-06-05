import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toggle, tick } from './actions.js';

import './gameOfLife.css';

let GameOfLife = ({ width, height, n, isAlive, onToggleCellState, onTick }) => {
  return (
    <div style={{ width: n * width, height: n * height }}>
      <div>
        {Array.from({ length: n * n })
          .map((value, index) => ({
            row: Math.floor(index / n),
            column: index % n
          }))
          .map(({ row, column }, index) => (
            <div
              key={index}
              className={classnames({
                cell: true,
                alive: isAlive[`${row}_${column}`]
              })}
              style={{
                top: 20 * row,
                left: 20 * column,
                width,
                height
              }}
              onClick={() => onToggleCellState(row, column)}
            />
          ))}
      </div>
      <button onClick={() => onTick(isAlive)}>Tick</button>
    </div>
  );
};

GameOfLife = connect(
  state => ({
    isAlive: state
  }),
  dispatch => ({
    onToggleCellState: (row, column) => dispatch(toggle(row, column)),
    onTick: isAlive => dispatch(tick(isAlive))
  })
)(GameOfLife);

export default GameOfLife;
