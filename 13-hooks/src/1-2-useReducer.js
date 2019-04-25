import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialState = { count: 0, isVisible: true };
const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1 };
  } else if (action.type === 'TOGGLE') {
    return { ...state, isVisible: !state.isVisible };
  }
  return state;
};

const Counter = () => {
  const [{ count, isVisible }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'TOGGLE' })}>Toggle</button>
      {isVisible && (
        <>
          <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
          {count}
        </>
      )}
    </div>
  );
};

render(<Counter />, document.getElementById('root-1-2'));
