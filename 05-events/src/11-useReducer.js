import React, { useReducer } from 'react';

const reducer = (state, action) => (action.type === 'INCREMENT' ? state + 1 : state);

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;
};

export default Counter;
