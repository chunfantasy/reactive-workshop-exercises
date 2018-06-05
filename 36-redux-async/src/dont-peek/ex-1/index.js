import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer.js';
import GameOfLife from './gameOfLife.js';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <GameOfLife width={20} height={20} n={10} />
  </Provider>,
  document.getElementById('root-ex-1')
);
