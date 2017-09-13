import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Counters from './1-problem.js';
import Counters2 from './2-move-on-up.js';

import './ex-2';
import './ex-3';

ReactDOM.render(
  <Counters />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <Counters2 />,
  document.getElementById('root-2')
);
