import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Countdown extends Component {
  state = { remainingTime: this.getRemainingTime() };

  getRemainingTime() {
    const now = new Date();
    return Math.max(
      0,
      Math.round((this.props.to.getTime() - now.getTime()) / 1000)
    );
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ remainingTime: this.getRemainingTime() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.remainingTime || "Time's up!"}</div>;
  }
}

ReactDOM.render(
  <Countdown to={new Date(Date.now() + 5 * 1000)} />,
  document.getElementById('root-ex-1')
);
