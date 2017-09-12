import React from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './GameContainer.js';

ReactDOM.render(
  <GameContainer n={10} width={20} height={20} />,
  document.getElementById('root-ex-3')
);
