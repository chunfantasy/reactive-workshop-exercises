import React, { Component } from 'react';
import './Game.css';
import Cell from './Cell.js';

class Game extends Component {
  state = { isAlive: {} };
  cellKey(row, column) {
    return `${row}_${column}`;
  }
  isCellAlive(row, column) {
    return this.state.isAlive[this.cellKey(row, column)];
  }
  toggleCellState(row, column) {
    this.setState(({ isAlive }) => {
      const key = this.cellKey(row, column);
      const result = { ...isAlive };
      if (isAlive[key]) {
        delete result[key];
      } else {
        result[key] = true;
      }
      return { isAlive: result };
    });
  }
  tick() {
    this.setState(({ isAlive }) => {
      const numberOfNeighbours = {};
      for (let key in isAlive) {
        const [row, column] = key.split('_').map(p => parseInt(p, 10));
        numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
        [
          [-1, -1],
          [-1, 0],
          [-1, 1],
          [0, -1],
          [0, 1],
          [1, -1],
          [1, 0],
          [1, 1]
        ].forEach(function([offsetRow, offsetCol]) {
          const neighbourKey = this.cellKey(
            row + offsetRow,
            column + offsetCol
          );
          numberOfNeighbours[neighbourKey] =
            (numberOfNeighbours[neighbourKey] || 0) + 1;
        }, this);
      }
      const result = {};
      for (let key in numberOfNeighbours) {
        if (
          numberOfNeighbours[key] === 3 ||
          (isAlive[key] && numberOfNeighbours[key] === 2)
        ) {
          result[key] = true;
        }
      }
      return { isAlive: result };
    });
  }
  render() {
    const { n, width, height } = this.props;
    return (
      <div style={{ width: n * width, height: n * height }}>
        <div>
          {Array.from({ length: n * n })
            .map((value, index) => ({
              row: Math.floor(index / n),
              column: index % n
            }))
            .map(({ row, column }, index) => (
              <Cell
                key={index}
                width={width}
                height={height}
                isAlive={this.isCellAlive(row, column)}
                row={row}
                column={column}
                onClick={() => this.toggleCellState(row, column)}
              />
            ))}
        </div>
        <button onClick={() => this.tick()}>Tick</button>
      </div>
    );
  }
}

export default Game;
