import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Players from './1-problem.js';
import PlayersWithKey from './2-key.js';
import './3-dont-do-this.js';
import './4-do-that.js';

ReactDOM.render(
  <Players />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <PlayersWithKey />,
  document.getElementById('root-2')
);
