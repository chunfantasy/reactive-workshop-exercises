import React, { useState } from 'react';
import classnames from 'classnames';
import './game-of-life.css';

// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);
const cellKey = (row, col) => `${row}_${col}`;

const GameOfLife = ({ n, width, height }) => {
  const [isAlive, setState] = useState({});
  const isCellAlive = (row, col) => isAlive[cellKey(row, col)];
  const toggleCellState = (row, col) =>
    setState(isAlive => {
      const key = cellKey(row, col);
      const { [key]: isCellAlive, ...result } = isAlive;
      return isCellAlive ? result : { [key]: true, ...result };
    });
  const tick = () =>
    setState(isAlive => {
      const neighbours = Object.keys(isAlive)
        .map(k => k.split('_').map(p => parseInt(p, 10)))
        .map(([row, col]) => deltas.map(([r, c, n]) => [row + r, col + c, n]))
        .flat()
        .map(([row, column, dn]) => [`${row}_${column}`, dn])
        .reduce((acc, [k, dn]) => ({ ...acc, [k]: (acc[k] || 0) + dn }), {});
      return Object.keys(neighbours)
        .filter(k => (isAlive[k] && neighbours[k] === 2) || neighbours[k] === 3)
        .reduce((result, key) => ({ ...result, [key]: true }), {});
    });

  return (
    <div style={{ width: n * width, height: n * height }}>
      <div>
        {Array.from({ length: n * n })
          .map((_, i) => ({ row: Math.floor(i / n), column: i % n }))
          .map(({ row, column }, index) => (
            <div
              key={index}
              className={classnames({
                cell: true,
                alive: isCellAlive(row, column)
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
