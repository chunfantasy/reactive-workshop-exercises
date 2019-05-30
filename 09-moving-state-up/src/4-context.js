import React, { createContext, useState } from 'react';

const CounterContext = createContext();

const Parent = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {count}
      <ComponentInBetween />
    </CounterContext.Provider>
  );
};

const ComponentInBetween = () => (
  <div>
    <Counter />
    <Counter />
  </div>
);

const Counter = () => (
  <CounterContext.Consumer>
    {({ count, increment }) => <button onClick={increment}>{count}</button>}
  </CounterContext.Consumer>
);

export default Parent;
