import React from 'react';
import { render } from 'react-dom';
import GameContainer from './GameContainer.js';

render(
  <GameContainer n={10} width={20} height={20} />,
  document.getElementById('root-ex-3')
);
