import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {value: 0};
  }
  count() {
    this.setState(({value}) => ({value: value + 1}));
  }
  render() {
    return <button onClick={this.count}>
      {this.state.value}
    </button>;
  }
}

export default Counter;
