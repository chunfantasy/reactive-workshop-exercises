import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Hello extends Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('root-2')
);
