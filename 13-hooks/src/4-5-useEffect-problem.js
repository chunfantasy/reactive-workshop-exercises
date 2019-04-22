import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

const Counter = ({ period }) => {
  const [time, setTime] = useState(0);
  const callbackRef = useRef();
  callbackRef.current = () => setTime(time + 1);
  useEffect(() => {
    const timer = window.setInterval(() => callbackRef.current(), period);
    return () => window.clearInterval(timer);
  }, [period]);
  return <span>{time}</span>;
};

const CounterController = () => {
  const [text, setText] = useState('Slowly type here...');
  const [period, setPeriod] = useState(1000);
  return (
    <>
      5:
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

render(<CounterController />, document.getElementById('root-4-5'));
