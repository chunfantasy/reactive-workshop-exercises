import React from 'react';
import { render } from 'react-dom';

let isHappy = false;
const Reconcilliation = () => {
  isHappy = !isHappy;
  if (isHappy) {
    return (
      <div>
        <div>Hello</div>
        <input type="text" />
      </div>
    );
  }
  return (
    <div>
      {false}
      <input type="text" />
    </div>
  );
};

setInterval(
  () => render(<Reconcilliation />, document.getElementById('root-9')),
  2000
);
