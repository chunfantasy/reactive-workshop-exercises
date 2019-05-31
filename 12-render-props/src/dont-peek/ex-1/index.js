import React, { Component } from 'react';
import { render } from 'react-dom';

class AutoRefresh extends Component {
  componentDidMount = () =>
    (this.interval = setInterval(() => this.forceUpdate(), this.props.interval));
  componentWillUnmount = () => clearInterval(this.interval);
  render = () => this.props.render({ now: new Date() });
}

const App = () => (
  <AutoRefresh
    interval={1000}
    render={({ now }) => <div>The current time is: {now.toLocaleTimeString()}</div>}
  />
);

render(<App />, document.getElementById('root-ex-1'));
