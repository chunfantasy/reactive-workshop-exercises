import React, { Component } from 'react';
import classnames from 'classnames';
import './game-of-life.css';

const Cell = ({ width, height, isAlive, row, column, onClick }) => (
  <div
    className={classnames({ cell: true, alive: isAlive })}
    style={{ top: 20 * row, left: 20 * column, width, height }}
    onClick={onClick}
  />
);

const Game = ({ n, width, height, isCellAlive, toggleCellState, tick }) => (
  <div style={{ width: n * width, height: n * height }}>
    <div>
      {Array.from({ length: n * n })
        .map((_, index) => ({ row: Math.floor(index / n), column: index % n }))
        .map(({ row, column }, index) => (
          <Cell
            key={index}
            width={width}
            height={height}
            isAlive={isCellAlive(row, column)}
            row={row}
            column={column}
            onClick={() => toggleCellState(row, column)}
          />
        ))}
    </div>
    <button onClick={tick}>Tick</button>
  </div>
);

// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);
const cellKey = (row, col) => `${row}_${col}`;

class GameOfLifeContainer extends Component {
  state = { isAlive: {} };
  isCellAlive = (row, col) => this.state.isAlive[cellKey(row, col)];
  toggleCellState = (row, col) => {
    this.setState(({ isAlive }) => {
      const key = cellKey(row, col);
      const { [key]: isCellAlive, ...result } = isAlive;
      return { isAlive: isCellAlive ? result : { [key]: [row, col], ...result } };
    });
  };
  // prettier-ignore
  tick = () => {
    this.setState(({ isAlive }) => {
      const neighbours = Object.values(isAlive)
        .flatMap(([row, col]) => deltas.map(([r, c, n]) => [cellKey(row + r, col + c), row + r, col + c, n]))
        .reduce((acc, [k, r, c, dn]) => ({ ...acc, [k]: [((acc[k] && acc[k][0]) || 0) + dn, r, c] }), {});
      const nextState = Object.entries(neighbours)
        .filter(([k, [n]]) => (isAlive[k] && n === 2) || n === 3)
        .reduce((isAlive, [k, [_, r, c]]) => ({ ...isAlive, [k]: [r, c] }), {});
      return { isAlive: nextState };
    });
  }
  render = () => (
    <Game
      {...this.props}
      isCellAlive={this.isCellAlive}
      toggleCellState={this.toggleCellState}
      tick={this.tick}
    />
  );
}

export default GameOfLifeContainer;
