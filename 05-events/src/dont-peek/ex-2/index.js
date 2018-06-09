import React from 'react';
import { render } from 'react-dom';
import Game from './Game.js';

render(
  <Game n={10} width={20} height={20} />,
  document.getElementById('root-ex-2')
);
