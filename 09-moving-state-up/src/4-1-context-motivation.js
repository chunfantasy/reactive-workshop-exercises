import React, { useState } from 'react';

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      {count}
      <ComponentInBetween count={count} increment={increment} />
    </div>
  );
};

const ComponentInBetween = ({ count, increment }) => (
  <div>
    <Counter count={count} increment={increment} />
    <Counter count={count} increment={increment} />
  </div>
);

const Counter = ({ count, increment }) => (
  <button onClick={increment}>{count}</button>
);

export default Parent;
