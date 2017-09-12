import React, {Component} from 'react';

class Clock extends Component {
  constructor() {
    super();
    this.state = {value: 5};
  }

  componentDidMount() {
    this.setState(({value}) => ({value: value - 1}));
    this.setState(({value}) => ({value: value - 1}));
    this.setState(({value}) => ({value: value - 1}));
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default Clock;
