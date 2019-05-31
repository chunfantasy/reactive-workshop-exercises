import React, { Component, useState } from 'react';

class OldCounter extends Component {
  state = { count: 0 };
  increment() {
    this.setState(({ count }) => ({ count: count + 1 }));
  }
  render() {
    return <button onClick={() => this.increment()}>{this.state.count}</button>;
  }
}

const Counter = () => {
  const [count, setValue] = useState(0);
  return <button onClick={() => setValue(count + 1)}>{count}</button>;
};

export default Counter;
