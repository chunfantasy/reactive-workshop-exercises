import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

render(<Counter />, document.getElementById('root-1-0'));
