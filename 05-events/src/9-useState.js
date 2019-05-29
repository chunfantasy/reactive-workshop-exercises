import React, { Component, useState } from 'react';
import { render } from 'react-dom';

class Counter1 extends Component {
  state = { count: 0 };
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };
  render() {
    return <button onClick={this.increment}>{this.state.count}</button>;
  }
}

const Counter2 = () => {
  const [count, setValue] = useState(0);
  return <button onClick={() => setValue(count + 1)}>{count}</button>;
};

render([<Counter1 />, <Counter2 />], document.getElementById('root-9'));
