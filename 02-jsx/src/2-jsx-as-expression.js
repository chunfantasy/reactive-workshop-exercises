import React from 'react';
import { render } from 'react-dom';

const RandomGreeting = () => {
  let result;
  if (Math.random() < 0.5) {
    result = <div>Hello!</div>;
  } else {
    result = <div>Howdy!</div>;
  }
  return result;
};

render(<RandomGreeting />, document.getElementById('root-2'));
