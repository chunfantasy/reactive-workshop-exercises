import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import gameOfLife from './gameOfLifeReducer';
import GameOfLife from './GameOfLife';

const store = createStore(gameOfLife);
const render = () => ReactDOM.render(
  <GameOfLife
    width={20} height={20} n={10}
    isAlive={store.getState()}
    onToggleCellState={(row, column) => store.dispatch({type: 'TOGGLE_CELL_STATE', row, column})}
    onTick={() => store.dispatch({type: 'TICK'})}
  />,
  document.getElementById('root')
)
render();
store.subscribe(render);
