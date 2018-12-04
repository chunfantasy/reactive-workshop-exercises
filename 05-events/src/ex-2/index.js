import React from 'react';
import { render } from 'react-dom';
import GameOfLife from './game-of-life.js';

render(
  <div>
    <GameOfLife n={10} width={50} height={50} />
  </div>,
  document.getElementById('root-ex-2')
);
