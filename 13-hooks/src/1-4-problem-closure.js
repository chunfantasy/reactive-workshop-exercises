import React, { useState } from 'react';
import { render } from 'react-dom';

const Problem = () => {
  const [number, setNumber] = useState(0);
  const inc1 = () => setNumber(number + 1);
  const dec1 = () => setNumber(number - 1);
  const inc2 = () => setNumber(number => number + 1);
  const dec2 = () => setNumber(number => number - 1);
  const [{ action }, setAction] = useState({ action: () => setNumber(123) });
  return (
    <div>
      {number}
      <button onClick={() => setAction({ action: inc1 })}>++ 🤕</button>
      <button onClick={() => setAction({ action: dec1 })}>-- 🤕</button>
      <button onClick={() => setAction({ action: inc2 })}>++ 😀</button>
      <button onClick={() => setAction({ action: dec2 })}>-- 😀</button>
      <button onClick={action}>!</button>
    </div>
  );
};

render(<Problem />, document.getElementById('root-1-4'));
