import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

const useInterval = (callback, period) => {
  const callbackRef = useRef();
  callbackRef.current = callback;
  useEffect(() => {
    const timer = window.setInterval(() => callbackRef.current(), period);
    return () => window.clearInterval(timer);
  }, [period]);
};

const Counter = ({ period }) => {
  const [time, setTime] = useState(0);
  useInterval(() => setTime(time + 1), period);
  return <span>{time}</span>;
};

const CounterController = () => {
  const [text, setText] = useState('Slowly type here...');
  const [period, setPeriod] = useState(1000);
  return (
    <>
      6:
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <input
        type="number"
        value={period}
        onChange={event => setPeriod(event.target.value)}
      />
      <Counter period={period} />
    </>
  );
};

render(<CounterController />, document.getElementById('root-4-6'));
