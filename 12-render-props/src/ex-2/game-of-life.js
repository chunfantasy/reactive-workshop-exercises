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

const Presentation = ({ n, width, height, isCellAlive, toggle, tick }) => (
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
            onClick={() => toggle(row, column)}
          />
        ))}
    </div>
    <button onClick={tick}>Tick</button>
  </div>
);

const cellKey = (row, col) => `${row}_${col}`;

class GameOfLifeContainer extends Component {
  state = { isAlive: {} };
  isCellAlive = (row, col) => this.state.isAlive[cellKey(row, col)];
  toggle = (row, col) =>
    this.setState(({ isAlive }) => {
      const key = cellKey(row, col);
      const { [key]: isCellAlive, ...result } = isAlive;
      return {
        isAlive: isCellAlive ? result : { [key]: true, ...result }
      };
    });
  tick = () =>
    fetch('/api/gameOfLife', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.isAlive)
    })
      .then(response => response.json())
      .then(isAlive => this.setState({ isAlive }));
  render = () => (
    <Presentation
      {...this.props}
      isCellAlive={this.isCellAlive}
      toggle={this.toggle}
      tick={this.tick}
    />
  );
}

export default GameOfLifeContainer;
