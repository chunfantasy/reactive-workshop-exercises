import React, { Component } from 'react';

class Alerter extends Component {
  showMessage() {
    alert('Clicked');
  }

  render() {
    return <button onClick={this.showMessage}>Click me</button>;
  }
}

export default Alerter;
