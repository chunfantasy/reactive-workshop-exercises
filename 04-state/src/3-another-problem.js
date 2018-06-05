import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    setInterval(() => this.setState({ time: new Date() }), 1000);
  }

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Clock;
