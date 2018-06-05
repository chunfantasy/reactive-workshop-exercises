import React, { Component } from 'react';
import './Game.css';
import Game from './Game.js';

class GameContainer extends Component {
  state = { isAlive: {} };
  cellKey = (row, column) => `${row}_${column}`;
  isCellAlive = (row, column) => {
    return this.state.isAlive[this.cellKey(row, column)];
  };
  toggleCellState = (row, column) => {
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
  };
  tick = () => {
    fetch('/api/gameOfLife', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.isAlive)
    })
      .then(response => response.json())
      .then(isAlive => this.setState({ isAlive }));
  };
  render() {
    const { n, width, height } = this.props;
    return (
      <Game
        n={n}
        width={width}
        height={height}
        isCellAlive={this.isCellAlive}
        toggleCellState={this.toggleCellState}
        tick={this.tick}
      />
    );
  }
}

export default GameContainer;
