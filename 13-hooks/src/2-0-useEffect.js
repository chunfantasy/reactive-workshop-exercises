import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const events = ['online', 'offline'];

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    console.log('Adding listeners');
    const listener = () => setIsOnline(window.navigator.onLine);
    events.forEach(t => window.addEventListener(t, listener));
    return () => {
      console.log('Removing listeners');
      events.forEach(t => window.removeEventListener(t, listener));
    };
  });
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

const Outer = () => {
  const [text, setText] = useState('Keep typing...');
  const onChange = event => setText(event.target.value);
  return [
    <input type="text" value={text} onChange={onChange} />,
    text && <OnlineStatus />
  ];
};

render(<Outer />, document.getElementById('root-2-0'));
