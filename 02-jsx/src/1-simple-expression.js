import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => {
  const name = 'World';
  return <div>Hello {name}!</div>;
};

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('root-1')
);
