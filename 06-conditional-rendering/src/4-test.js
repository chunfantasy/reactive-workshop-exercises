import React, {Component} from 'react';

class Congratulations extends Component {
  constructor() {
    super();
    console.log('Congratulations');
  }
  componentDidMount = () => console.log('Congratulations:componentDidMount');
  componentWillUnmount = () => console.log('Congratulations:componentWillUnmount');
  render = () => <div>Congratulations!</div>;
}
class Comiserations extends Component {
  constructor() {
    super();
    console.log('Comiserations');
  }
  componentDidMount = () => console.log('Comiserations:componentDidMount');
  componentWillUnmount = () => console.log('Comiserations:componentWillUnmount');
  render = () => <div>Better luck next time.</div>;
}
class Game extends Component {
  constructor() {
    super();
    this.state = {};
  }
  playAgain = () => this.setState({won: Math.random() < 0.5});
  render() {
    return <div>
      <button onClick={this.playAgain}>Play</button>
      {this.state.won ? <Congratulations /> : <Comiserations />}
    </div>;
  }
}
export default Game;
