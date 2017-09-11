import React from 'react';
import './Game.css';
import Cell from './Cell.js';

const Game = ({n, width, height, isCellAlive, toggleCellState, tick}) => <div
  style={{width: n * width, height: n * height}}>
  <div>
    {
      Array.from({length: n * n})
        .map((value, index) => ({row: Math.floor(index / n), column: index % n}))
        .map(({row, column}, index) => <Cell
          key={index}
          width={width}
          height={height}
          isAlive={isCellAlive(row, column)}
          row={row}
          column={column}
          onClick={() => toggleCellState(row, column)}
        />)
    }
  </div>
  <button onClick={tick}>Tick</button>
</div>;

export default Game;
