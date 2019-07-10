import React, { Component } from 'react';
import { render } from 'react-dom';

class AutoRefresh extends Component {
  setupInterval = () =>
    (this.interval = setInterval(() => this.forceUpdate(), this.props.interval));
  componentDidMount = () => this.setupInterval();
  componentWillUnmount = () => clearInterval(this.interval);
  componentDidUpdate = prevProps => {
    if (this.props.interval !== prevProps.interval) {
      clearInterval(this.interval);
      this.setupInterval();
    }
  };
  render = () => this.props.render({ now: new Date() });
}

const App = () => (
  <AutoRefresh
    interval={1000}
    render={({ now }) => <div>The current time is: {now.toLocaleTimeString()}</div>}
  />
);

render(<App />, document.getElementById('root-ex-1'));
