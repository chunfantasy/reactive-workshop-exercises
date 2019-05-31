import React, { Component } from 'react';
class Counter1 extends Component {
  state = { value: 0 };
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  render = () => (
    <button onClick={this.increment}>{this.props.offset + this.state.value}</button>
  );
}
class Counter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset,
      value: 0
    };
  }
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  render = () => (
    <button onClick={this.increment}>{this.state.offset + this.state.value}</button>
  );
}
class Counters extends Component {
  state = { value: 0 };
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  render = () => (
    <div>
      Offset: <button onClick={this.increment}>{this.state.value}</button>
      Counter1: <Counter1 offset={this.state.value} />
      Counter2: <Counter2 offset={this.state.value} />
    </div>
  );
}
export default Counters;
