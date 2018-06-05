import React, { Component } from 'react';

class Clock extends Component {
  state = { value: 5 };

  componentDidMount() {
    this.setState({ value: this.state.value - 1 });
    this.setState({ value: this.state.value - 1 });
    this.setState({ value: this.state.value - 1 });
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Clock;
