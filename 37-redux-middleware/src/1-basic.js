import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';

const Counter = ({ value, onIncrement, onDecrement }) => (
  <p>
    {value}
    <button onClick={onIncrement}>+</button>
  </p>
);

const loggingMiddleware = store => next => action => {
  const previousState = store.getState();
  let result = next(action);
  console.log(
    `previousState: ${JSON.stringify(previousState)} action: ${JSON.stringify(
      action
    )} currentState: ${JSON.stringify(store.getState())}`
  );
  return result;
};

const store = createStore(
  (state = 0, action) => (action.type === 'INCREMENT' ? state + 1 : state),
  applyMiddleware(loggingMiddleware)
);

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    />,
    document.getElementById('root')
  );
render();
store.subscribe(render);
