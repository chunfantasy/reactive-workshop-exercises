import React, { memo, useCallback, useState } from 'react';
import { render } from 'react-dom';

const Counter = memo(({ value, onIncrement }) => {
  console.log('Counter');
  return <button onClick={onIncrement}>{value}</button>;
});

const App = () => {
  const [value1, setValue1] = useState(0);
  const inc1 = useCallback(() => setValue1((value1 + 1) % 5), [value1]);
  const [value2, setValue2] = useState(0);
  const inc2 = useCallback(() => setValue2((value2 + 1) % 5), [value2]);
  return (
    <>
      <Counter value={value1} onIncrement={inc1} />
      <Counter value={value2} onIncrement={inc2} />
    </>
  );
};

render(<App />, document.getElementById('root-5-4'));
