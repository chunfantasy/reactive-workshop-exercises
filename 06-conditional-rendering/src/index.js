import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Game from './1-if-else.js';
import GameTernary from './2-ternary.js';
import GameTernaryInlined from './3-ternary-inlined.js';
import GameTest from './4-test.js';

ReactDOM.render(
  <Game />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <GameTernary />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <GameTernaryInlined />,
  document.getElementById('root-3')
);

ReactDOM.render(
  <GameTest />,
  document.getElementById('root-4')
);
