import React, {Component} from 'react';

const Counter = ({value, onIncrement}) => <button onClick={onIncrement}>{value}</button>

class CounterContainer extends Component {
  constructor() {
    super();
    this.state = {value: 0};
  }
  increment = () => this.setState(({value}) => ({value: value + 1}))
  render() {
    return <Counter
      value={this.state.value}
      onIncrement={this.increment}
    />;
  }
}

export default CounterContainer;