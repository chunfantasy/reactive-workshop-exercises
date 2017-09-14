import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const autoRefresh = ({period}) => MyComponent => class AutoRefresh extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), period);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <MyComponent {...this.props} />;
  }
};

const Clock = autoRefresh({period: 1000})(
  ({label}) => <div>{label}{new Date().toLocaleTimeString()}</div>
);

ReactDOM.render(
  <Clock label="Current time: " />,
  document.getElementById('root-ex-1')
);
