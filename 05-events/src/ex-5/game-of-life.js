import React, { useReducer } from 'react';
import classnames from 'classnames';
import './game-of-life.css';

// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);
const cellKey = (row, col) => `${row}_${col}`;
const initialState = {};
const isCellAlive = (state, row, col) => state[cellKey(row, col)];
const toggle = (state, row, col) => {
  const key = cellKey(row, col);
  const { [key]: isCellAlive, ...result } = state;
  return isCellAlive ? result : { [key]: [row, col], ...result };
};
// prettier-ignore
const tick = state => {
  const neighbours = Object.values(state)
    .flatMap(([row, col]) => deltas.map(([r, c, n]) => [cellKey(row + r, col + c), row + r, col + c, n]))
    .reduce((acc, [k, r, c, dn]) => ({ ...acc, [k]: [((acc[k] && acc[k][0]) || 0) + dn, r, c] }), {});
  return Object.entries(neighbours)
    .filter(([k, [n]]) => (state[k] && n === 2) || n === 3)
    .reduce((isAlive, [k, [_, r, c]]) => ({ ...isAlive, [k]: [r, c] }), {});
};
const reducer = (state, { type, row, col }) =>
  ({
    TOGGLE: () => toggle(state, row, col),
    TICK: () => tick(state)
  }[type]());

const GameOfLife = ({ n, width, height }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleCellState = (row, col) => dispatch({ type: 'TOGGLE', row, col });
  const tick = () => dispatch({ type: 'TICK' });
  return (
    <div style={{ width: n * width, height: n * height }}>
      <div>
        {Array.from({ length: n * n })
          .map((_, i) => ({ row: Math.floor(i / n), column: i % n }))
          .map(({ row, column }) => (
            <div
              className={classnames({
                cell: true,
                alive: isCellAlive(state, row, column)
              })}
              style={{ top: 20 * row, left: 20 * column, width, height }}
              onClick={() => toggleCellState(row, column)}
            />
          ))}
      </div>
      <button onClick={tick}>Tick</button>
    </div>
  );
};

export default GameOfLife;
