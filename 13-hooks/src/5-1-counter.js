import React, { memo, useState } from 'react';
import { render } from 'react-dom';

const Counter = memo(({ value, onIncrement }) => {
  console.log('Counter');
  return <button onClick={onIncrement}>{value}</button>;
});

const App = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  return (
    <>
      <Counter value={value1} onIncrement={() => setValue1((value1 + 1) % 5)} />
      <Counter value={value2} onIncrement={() => setValue2((value2 + 1) % 5)} />
    </>
  );
};

render(<App />, document.getElementById('root-5-1'));
