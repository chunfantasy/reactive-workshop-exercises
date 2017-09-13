import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Players from './1-problem.js';
import PlayersWithKey from './2-key.js';
import './3-incorrect-key-usage.js';
import './4-correct-key-usage.js';
import MoreElaboratePlayers from './5-problem.js';

import './ex-2';

ReactDOM.render(
  <Players />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <PlayersWithKey />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <MoreElaboratePlayers />,
  document.getElementById('root-5')
);
