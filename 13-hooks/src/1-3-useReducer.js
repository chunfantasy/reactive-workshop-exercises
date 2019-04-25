import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialState = { count: 0, isVisible: true };
const reducer = (state, action) => ({ ...state, ...action });

const Counter = () => {
  const [{ count, isVisible }, setState] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => setState({ isVisible: !isVisible })}>
        Toggle
      </button>
      {isVisible && (
        <>
          <button onClick={() => setState({ count: count + 1 })}>+</button>
          {count}
        </>
      )}
    </div>
  );
};

render(<Counter />, document.getElementById('root-1-3'));
