import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(isVisible => !isVisible)}>
        Toggle
      </button>
      {isVisible && (
        <>
          <button onClick={() => setCount(count + 1)}>+</button>
          {count}
        </>
      )}
    </div>
  );
};

render(<Counter />, document.getElementById('root-1-1'));
