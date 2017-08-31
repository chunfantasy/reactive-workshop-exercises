import React, {Component} from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {value: 0};
  }
  next() {
    this.setState(({value}) => ({value: value + 1}));
  }
  render() {
    return (<button onClick={() => this.next()}>
      {this.state.value}
    </button>);
  }
}
