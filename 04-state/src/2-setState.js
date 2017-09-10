import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyIp extends Component {
  constructor() {
    super();
    this.state = {};
    fetch('https://api.ipify.org/')
      .then(response => response.text())
      .then(address => this.setState({address}));
  }

  render() {
    return <div>{this.state.address}</div>;
  }
}

ReactDOM.render(
  <MyIp />,
  document.getElementById('root-2')
);
