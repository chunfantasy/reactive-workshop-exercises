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
      return {
        isAlive: isCellAlive ? result : { [key]: true, ...result }
      };
    });
  }
  tick() {
    this.setState(({ isAlive }) => {
      const neighbours = Object.keys(isAlive)
        .map(k => k.split('_').map(p => parseInt(p, 10)))
        .map(([row, col]) => deltas.map(([r, c, n]) => [row + r, col + c, n]))
        .flat()
        .map(([row, column, dn]) => [`${row}_${column}`, dn])
        .reduce((acc, [k, dn]) => ({ ...acc, [k]: (acc[k] || 0) + dn }), {});
      const nextState = Object.keys(neighbours)
        .filter(k => (isAlive[k] && neighbours[k] === 2) || neighbours[k] === 3)
        .reduce((result, key) => ({ ...result, [key]: true }), {});
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
