import React from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
  const name = 'World';
  return <div>Hello {name}!</div>;
};

render(<HelloWorld />, document.getElementById('root-1'));
