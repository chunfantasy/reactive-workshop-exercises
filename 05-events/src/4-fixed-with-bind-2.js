import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 };
  constructor() {
    super();
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(({ value }) => ({ value: value + 1 }));
  }
  render() {
    return <button onClick={this.increment}>{this.state.value}</button>;
  }
}

export default Counter;
