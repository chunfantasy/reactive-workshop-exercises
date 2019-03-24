import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const events = ['online', 'offline'];

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const listener = () => setIsOnline(window.navigator.onLine);
    events.forEach(t => window.addEventListener(t, listener));
    return () => events.forEach(t => window.removeEventListener(t, listener));
  });
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

render(<OnlineStatus />, document.getElementById('root-2'));
