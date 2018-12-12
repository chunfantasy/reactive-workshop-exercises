import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import gameOfLife from './game-of-life-reducer';
import GameOfLife from './game-of-life';

const store = createStore(gameOfLife);
const renderApp = () =>
  render(
    <GameOfLife
      width={20}
      height={20}
      n={10}
      isAlive={store.getState()}
      onToggle={(row, column) =>
        store.dispatch({ type: 'TOGGLE_CELL_STATE', row, column })
      }
      onTick={() => store.dispatch({ type: 'TICK' })}
    />,
    document.getElementById('root-ex-1')
  );
renderApp();
store.subscribe(renderApp);
