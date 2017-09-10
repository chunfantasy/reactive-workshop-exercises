import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './1-problem.js';
import './2-setState.js';
import Clock from './3-another-problem.js';
import ClockWithLifecycle from './4-lifecycle-methods.js';

import './dont-peek/ex-1';

ReactDOM.render(
  <Clock />,
  document.getElementById('root-3')
);

ReactDOM.render(
  <ClockWithLifecycle />,
  document.getElementById('root-4')
);

