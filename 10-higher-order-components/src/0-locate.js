import React from 'react';
import { render } from 'react-dom';

const locate = Component => props => (
  <div style={{ border: 'solid 1px red' }}>
    <Component {...props} />
  </div>
);

let Hello = ({ name }) => <div>Hello {name}!</div>;
Hello = locate(Hello);

render(
  <div>
    <Hello name="World" />
  </div>,
  document.getElementById('root-0')
);
