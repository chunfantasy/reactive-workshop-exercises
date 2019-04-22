import React, { memo, useRef, useState } from 'react';
import { render } from 'react-dom';

const Counter = memo(({ value, onIncrement }) => {
  console.log('Counter');
  return <button onClick={onIncrement}>{value}</button>;
});

const App = () => {
  const [value1, setValue1] = useState(0);
  const callback1 = useRef(() => setValue1(value => (value + 1) % 5));
  const [value2, setValue2] = useState(0);
  const callback2 = useRef(() => setValue2(value => (value + 1) % 5));
  return (
    <>
      <Counter value={value1} onIncrement={callback1.current} />
      <Counter value={value2} onIncrement={callback2.current} />
    </>
  );
};

render(<App />, document.getElementById('root-5-2'));
