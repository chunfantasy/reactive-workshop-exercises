import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const Counter = ({ value, onIncrement }) => (
  <p>
    {value}
    <button onClick={onIncrement}>+</button>
  </p>
);

const store = createStore((state = 0, action) => {
  return action.type === 'INCREMENT' ? state + 1 : state;
});

const renderApp = () =>
  render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    />,
    document.getElementById('root')
  );
renderApp();
store.subscribe(renderApp);
