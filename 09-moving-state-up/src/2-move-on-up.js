import React, { Component } from 'react';

const Counter = ({ value, onIncrement }) => (
  <button onClick={onIncrement}>{value}</button>
);

class Counters extends Component {
  state = { value: 0 };
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  render() {
    return (
      <div>
        <Counter value={this.state.value} onIncrement={this.increment} />
        <Counter value={this.state.value} onIncrement={this.increment} />
      </div>
    );
  }
}

export default Counters;
