import React from 'react';
const showMessage = () => alert('Hello World!');
// prettier-ignore
const Alerter = () => <div>
  <button onClick={showMessage}>Click me</button>
  <button onClick={function() { alert('Hello World!'); }}>
    Click me
  </button>
  <button onClick={alert.bind(window, 'Hello World!')}>Click me</button>
  <button onClick={() => alert('Hello World!')}>Click me</button>
  {/* <button onClick={alert('Hello World!')}>Click me (incorrect)</button> */}
</div>;
export default Alerter;
