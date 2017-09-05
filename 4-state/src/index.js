import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './1-problem.js';
import Clock from './2-set-state.js';
import ClockWithLifecycle from './3-lifecycle-methods.js';

ReactDOM.render(
  <Clock />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <ClockWithLifecycle />,
  document.getElementById('root-3')
);

