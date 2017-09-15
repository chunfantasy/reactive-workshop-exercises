import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const autoRefresh = (period = 1000) => MyComponent => class AutoRefresh extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), period);
  }

  componentWillUnmount = () => clearInterval(this.interval);

  render = () => <MyComponent {...this.props} />
};

const CurrentTime = ({label}) => <div>{label}{new Date().toLocaleTimeString()}</div>;
const OneSecondClock = autoRefresh()(CurrentTime);
const TwoSecondClock = autoRefresh(2000)(CurrentTime);

ReactDOM.render(
  <div>
    <OneSecondClock label="One: " />
    <TwoSecondClock label="Two: " />
  </div>,
  document.getElementById('root-ex-1')
);
