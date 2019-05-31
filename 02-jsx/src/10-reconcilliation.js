import React from 'react';
import { render } from 'react-dom';

let isHappy = false;
const Reconcilliation = () => {
  isHappy = !isHappy;
  return (
    <div>
      {isHappy && <div>Hello</div>}
      <input type="text" />
    </div>
  );
};

setInterval(
  () => render(<Reconcilliation />, document.getElementById('root-10')),
  2000
);
