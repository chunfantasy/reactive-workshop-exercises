import React, { Component } from 'react';

const Congratulations = () => <div>Congratulations!</div>;
const Comiserations = () => <div>Better luck next time.</div>;
class Game extends Component {
  state = {};
  playAgain = () => this.setState({ won: Math.random() < 0.5 });
  render() {
    const message = this.state.won ? <Congratulations /> : <Comiserations />;
    return (
      <div>
        <button onClick={this.playAgain}>Play</button>
        {message}
      </div>
    );
  }
}
export default Game;
