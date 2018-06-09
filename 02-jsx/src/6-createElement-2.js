import { createElement } from 'react';
import { render } from 'react-dom';

const Child = () => createElement('div', null, 'Hello World!');

const Parent = () =>
  createElement(
    'div',
    null,
    createElement(Child, null),
    createElement('input', { type: 'button', value: 'Click me' })
  );

render(createElement(Parent, null), document.getElementById('root-6-2'));
