import React, { createContext, useState, useContext } from 'react';

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { count, increment } = useContext(CounterContext);
  return <button onClick={increment}>{count}</button>;
};

const App = () => (
  <CounterProvider>
    <Counter />
    <Counter />
  </CounterProvider>
);

export default App;
