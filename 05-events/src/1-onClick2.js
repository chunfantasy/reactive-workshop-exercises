import React, {Component} from 'react';
class Alerter extends Component {
  showMessage() {
    alert('Hello World!');
  }
  render() {
    return <div>
      <button onClick={this.showMessage}>Click me</button>
      <button onClick={function () { alert('Hello World!'); }}>Click me</button>
      <button onClick={alert.bind(window, 'Hello World!')}>Click me</button>
      <button onClick={() => alert('Hello World!')}>Click me</button>
      {/* <button onClick={alert('Hello World!')}>Click me (incorrect)</button> */}
    </div>;
  }
}
export default Alerter;
