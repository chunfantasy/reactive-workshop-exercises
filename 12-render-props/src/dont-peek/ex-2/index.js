import React from 'react';
import { render } from 'react-dom';
import { GameOfLifeContainer, GameOfLifePresentation } from './game-of-life.js';

render(
  <GameOfLifeContainer
    n={10}
    width={20}
    height={20}
    render={GameOfLifePresentation}
  />,
  document.getElementById('root-ex-2')
);
