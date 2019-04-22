import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [time, setTime] = useState(0);
  const callbackRef = useRef();
  callbackRef.current = () => setTime(time + 1);
  useEffect(() => {
    const timer = window.setInterval(() => callbackRef.current(), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return <span>{time}</span>;
};

const CounterController = () => {
  const [text, setText] = useState('Slowly type here...');
  return (
    <>
      4:
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
      <Counter />
    </>
  );
};

render(<CounterController />, document.getElementById('root-4-4'));
