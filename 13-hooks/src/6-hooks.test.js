import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

let container, button, label;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  button = container.querySelector('button');
  label = container.querySelector('p');
});

afterEach(() => {
  document.body.removeChild(container);
  container = button = label = null;
});

it('shoud start counting from 0', () => {
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');
});

it('should increment the counter when button is clicked', () => {
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});
