import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 };
  increment() {
    this.setState(({ value }) => ({ value: value + 1 }));
  }
  render() {
    return (
      <button onClick={this.increment.bind(this)}>{this.state.value}</button>
    );
  }
}

export default Counter;
