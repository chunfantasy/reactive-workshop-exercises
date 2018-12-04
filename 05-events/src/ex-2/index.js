import React from 'react';
import { render } from 'react-dom';
import GameOfLife from './game-of-life.js';

render(
  <div>
    <GameOfLife n={10} width={20} height={20} />
  </div>,
  document.getElementById('root-ex-2')
);
