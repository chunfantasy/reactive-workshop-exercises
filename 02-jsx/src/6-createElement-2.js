import React from 'react';
import ReactDOM from 'react-dom';

const Child = () => React.createElement('div', null, 'Hello World!');

const Parent = () =>
  React.createElement(
    'div',
    null,
    React.createElement(Child, null),
    React.createElement('input', { type: 'button', value: 'Click me' })
  );

ReactDOM.render(
  React.createElement(Parent, null),
  document.getElementById('root-6-2')
);
