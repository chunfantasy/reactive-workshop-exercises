import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const Counter = ({value, onIncrement, onDecrement}) => <p>
  {value}
  <button onClick={onIncrement}>+</button>
</p>;

const store = createStore((state = 0, action) => {
  return action.type === 'INCREMENT' ? state + 1 : state;
});

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);
render();
store.subscribe(render);
