import React, { Component } from 'react';
import {isCellAlive, toggleCellState, tick} from './rules.js';
import Cell from './Cell.js';
import './Game.css';

class Game extends Component {
  constructor() {
    super();
    this.state = {cells: {}};
  }
  isCellAlive(row, column) {
    return isCellAlive(this.state.cells, row, column);
  }
  toggleCellState(row, column) {
    this.setState(({cells}) => ({cells: toggleCellState(cells, row, column)}));
  }
  tick() {
    this.setState(({cells}) => ({cells: tick(cells)}));
  }
  render() {
    const {rows, columns} = this.props;
    return (
      <div>
        <button onClick={() => this.tick()}>Tick</button>
        <div className="grid">
          {
            Array.from({length: rows * columns})
              .map((value, index) => ({row: Math.floor(index / columns), column: index % columns}))
              .map(({row, column}, index) => {
                return (
                  <Cell
                    key={index}
                    row={row}
                    column={column}
                    isAlive={this.isCellAlive(row, column)}
                    onToggle={() => this.toggleCellState(row, column)} 
                  />
                );
              })
          }
        </div>
      </div>
    );
  }
}

export default Game;
