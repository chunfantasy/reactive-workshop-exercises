import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(time + 1), 1000);
    return () => window.clearInterval(timer);
  });
  return <span>1: {time}</span>;
};

render(<Counter />, document.getElementById('root-4-1'));
