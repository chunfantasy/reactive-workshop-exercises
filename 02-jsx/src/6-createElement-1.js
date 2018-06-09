import React from 'react';
import { render } from 'react-dom';

const Child = () => <div>Hello World!</div>;

const Parent = () => (
  <div>
    <Child />
    <input type="button" value="Click me" />
  </div>
);

render(<Parent />, document.getElementById('root-6-1'));
