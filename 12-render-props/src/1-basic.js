import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AutoRefresh extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.forceUpdate(), this.props.interval);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return this.props.render({now: new Date()});
  }
}

const App = () => <div>
  <AutoRefresh interval={1000} render={({now}) => (
    <div>The current time is: {now.toLocaleTimeString()}</div>
  )} />
</div>;

ReactDOM.render(
  <App />,
  document.getElementById('root-1')
);
