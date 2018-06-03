import React from 'react';
import classnames from 'classnames';
import './Game.css';

const cellKey = (row, column) => `${row}_${column}`;

const isCellAlive = (currentState, row, column) => {
  return !!currentState[cellKey(row, column)];
}

const toggle = (currentState, row, column) => {
  const key = `${row}_${column}`;
  const {[key]: isAlive, ...result} = currentState;
  return isAlive ? result : {...result, [key]: true};
};

const tick = currentState => {
  const numberOfNeighbours = {};
  for (let key in currentState) {
    const [row, column] = key.split('_').map(p => parseInt(p, 10));
    numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
    [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function ([offsetRow, offsetCol]) {
      const neighbourKey = cellKey(row + offsetRow, column + offsetCol);
      numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
    });
  }
  const result = {};
  for (let key in numberOfNeighbours) {
    if (numberOfNeighbours[key] === 3 || (currentState[key] && numberOfNeighbours[key] === 2)) {
      result[key] = true;
    }
  }
  return result;
};

const GameOfLifePresentation = ({n, width, height, isAlive, onToggle, onTick}) => <div style={{width: n * width, height: n * height}}>
  <div>
    {
      Array.from({length: n * n})
        .map((value, index) => ({row: Math.floor(index / n), column: index % n}))
        .map(({row, column}, index) => <div
          key={index}
          className={classnames({cell: true, alive: isAlive(row, column)})}
          style={{width, height, top: 20 * row, left: 20 * column}}
          onClick={() => onToggle({row, column})} />
        )
    }
  </div>
  <button onClick={onTick}>Tick</button>
</div>;

export {isCellAlive, toggle, tick, GameOfLifePresentation};
