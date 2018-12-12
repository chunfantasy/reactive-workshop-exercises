import React from 'react';
import { render } from 'react-dom';
import './game-of-life.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import gameOfLife from './game-of-life-reducer';
import GameOfLife from './game-of-life';

const store = createStore(gameOfLife);
render(
  <Provider store={store}>
    <GameOfLife width={20} height={20} n={10} />
  </Provider>,
  document.getElementById('root-ex-1')
);
