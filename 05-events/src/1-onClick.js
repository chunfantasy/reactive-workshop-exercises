import React, {Component} from 'react';

class Alerter extends Component {
  showMessage() {
    alert('Clicked');
  }

  render() {
    return <button onClick={this.message}>
      Click me
    </button>;
  }
}

export default Alerter;
