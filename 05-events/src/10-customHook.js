import React, { useState } from 'react';
import { render } from 'react-dom';

const useCounter = () => {
  const [count, setValue] = useState(0);
  return [count, () => setValue(count + 1)];
};

const Counter = () => {
  const [count, increment] = useCounter();
  return <button onClick={increment}>{count}</button>;
};

render(<Counter />, document.getElementById('root-10'));
