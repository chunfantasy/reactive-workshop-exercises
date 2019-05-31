import React, { useState } from 'react';

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  return [state, action => setState(reducer(state, action))];
};

const reducer = (state, action) => (action.type === 'INCREMENT' ? state + 1 : state);

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return <button onClick={() => dispatch({ type: 'INCREMENT' })}>{count}</button>;
};

export default Counter;
