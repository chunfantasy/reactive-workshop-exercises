import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  state = { count: 0 };
  increment = () => this.setState(({ count }) => ({ count: count + 1 }));
  render = () => this.props.render({ ...this.state, onIncrement: this.increment });
}

const App = () => (
  <Counter
    render={({ count, onIncrement }) => (
      <button onClick={onIncrement}>{count}</button>
    )}
  />
);

render(<App />, document.getElementById('root-1'));
