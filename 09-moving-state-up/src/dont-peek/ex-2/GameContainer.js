import React, {Component} from 'react';
import './Game.css';
import Game from './Game.js';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      isAlive: {}
    };
  }
  cellKey = (row, column) => `${row}_${column}`
  isCellAlive = (row, column) => {
    return this.state.isAlive[this.cellKey(row, column)];
  }
  toggleCellState = (row, column) => {
    this.setState(({isAlive}) => {
      const key = this.cellKey(row, column);
      const result = {...isAlive};
      if (isAlive[key]) {
        delete result[key];
      } else {
        result[key] = true;
      }
      return {isAlive: result};
    });
  }
  tick = () => {
    this.setState(({isAlive}) => {
      const numberOfNeighbours = {};
      for (let key in isAlive) {
        const [row, column] = key.split('_').map(p => parseInt(p, 10));
        numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
        [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function ([offsetRow, offsetCol]) {
          const neighbourKey = this.cellKey(row + offsetRow, column + offsetCol);
          numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
        }, this);
      }
      const result = {};
      for (let key in numberOfNeighbours) {
        if (numberOfNeighbours[key] === 3 || (isAlive[key] && numberOfNeighbours[key] === 2)) {
          result[key] = true;
        }
      }
      return {isAlive: result};
    });
  }
  render() {
    const {n, width, height} = this.props;
    return <Game
      n={n}
      width={width}
      height={height}
      isCellAlive={this.isCellAlive}
      toggleCellState={this.toggleCellState}
      tick={this.tick}
    />;
  }
}

export default GameContainer;