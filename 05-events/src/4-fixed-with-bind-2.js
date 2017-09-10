import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {value: 0};
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState(({value}) => ({value: value + 1}));
  }
  render() {
    return <button onClick={this.increment}>
      {this.state.value}
    </button>;
  }
}

export default Counter;
