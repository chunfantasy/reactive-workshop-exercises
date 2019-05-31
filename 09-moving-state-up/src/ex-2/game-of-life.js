import React, { Component } from 'react';
import classnames from 'classnames';
import './game-of-life.css';

// prettier-ignore
const deltas = Array.from({ length: 9 }, (_, i) => [Math.floor(i / 3) - 1, (i % 3) - 1, i === 4 ? 0 : 1]);
const cellKey = (row, col) => `${row}_${col}`;

class GameOfLife extends Component {
  state = { isAlive: {} };
  isCellAlive(row, col) {
    return this.state.isAlive[cellKey(row, col)];
  }
  toggleCellState(row, col) {
    this.setState(({ isAlive }) => {
      const key = cellKey(row, col);
      const { [key]: isCellAlive, ...result } = isAlive;
      return { isAlive: isCellAlive ? result : { [key]: [row, col], ...result } };
    });
  }
  // prettier-ignore
  tick() {
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
  render() {
    const { n, width, height } = this.props;
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
                  alive: this.isCellAlive(row, column)
                })}
                style={{ top: 20 * row, left: 20 * column, width, height }}
                onClick={() => this.toggleCellState(row, column)}
              />
            ))}
        </div>
        <button onClick={() => this.tick()}>Tick</button>
      </div>
    );
  }
}

export default GameOfLife;
