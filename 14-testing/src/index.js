import React from 'react';
import { render } from 'react-dom';
import './index.css';
import HelloWorld from './1-basic';
import Counter from './2-state-and-events';
import MyIp from './4-async';
import GameOfLife from './dont-peek/ex-1/game-of-life';

render(<HelloWorld name="World" />, document.getElementById('root-1'));
render(<Counter />, document.getElementById('root-2'));
render(<MyIp />, document.getElementById('root-3'));
render(
  <GameOfLife n={10} width={20} height={20} />,
  document.getElementById('root-ex-1')
);
