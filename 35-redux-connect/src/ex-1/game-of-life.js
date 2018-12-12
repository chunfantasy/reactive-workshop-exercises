import React from 'react';
import classnames from 'classnames';

const GameOfLife = ({ width, height, n, isAlive, onToggle, onTick }) => {
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
              onClick={() => onToggle(row, column)}
            />
          ))}
      </div>
      <button onClick={onTick}>Tick</button>
    </div>
  );
};

export default GameOfLife;
