import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AutoRefresh extends Component {
  componentDidMount() {
    const {period} = this.props;
    this.interval = setInterval(() => this.forceUpdate(), period);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {Component, period, ...props} = this.props;
    return <Component {...props} />;
  }
}

ReactDOM.render(
  <AutoRefresh
    period={1000}
    Component={() => <div>{new Date().toLocaleTimeString()}</div>}
  />,
  document.getElementById('root-ex-1')
);
