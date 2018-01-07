import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Fetch extends Component {
  state = {}
  async componentDidMount() {
    const response = await fetch(this.props.url);
    const data = await response.text();
    this.setState({data});
  }
  render() {
    return this.props.render(this.state);
  }
}

const App = () => <div>
  <Fetch url="/api/ipify" render={({data}) => (
    <div>Your IP address is: {data}</div>
  )} />
</div>;

ReactDOM.render(
  <App />,
  document.getElementById('root-ex-1') 
);
