import React, { Component } from 'react';
import { render } from 'react-dom';

class MyIp extends Component {
  constructor() {
    super();
    this.state = {};
    fetch('/api/ipify')
      .then(response => response.text())
      .then(address => this.setState({ address }));
  }

  render() {
    return <div>{this.state.address}</div>;
  }
}

render(<MyIp />, document.getElementById('root-2'));
