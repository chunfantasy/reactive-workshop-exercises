import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

const useAutoRefresh = timeInMillis => {
  const [, setNow] = useState(new Date());
  const savedCallback = useRef();
  const callback = () => setNow(new Date());
  useEffect(() => (savedCallback.current = callback));
  useEffect(() => {
    const interval = setInterval(savedCallback.current, timeInMillis);
    return () => clearInterval(interval);
  }, [timeInMillis]);
};

const Clock = () => {
  useAutoRefresh(1000);
  return <div>{new Date().toLocaleTimeString()}</div>;
};

render(<Clock />, document.getElementById('root-4'));
