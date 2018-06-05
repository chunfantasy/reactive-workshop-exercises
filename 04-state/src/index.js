import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './1-problem.js';
import './2-setState.js';
import Clock from './3-another-problem.js';
import ClockWithLifecycle from './4-lifecycle-methods.js';
import ClockBatching from './5-batching.js';
import ClockBatchingSolution from './6-batching-solution.js';
import IllustrateMergingStateUpdates from './7-merging-updates.js';

import './ex-1';

ReactDOM.render(<Clock />, document.getElementById('root-3'));

ReactDOM.render(<ClockWithLifecycle />, document.getElementById('root-4'));

ReactDOM.render(<ClockBatching />, document.getElementById('root-5'));

ReactDOM.render(<ClockBatchingSolution />, document.getElementById('root-6'));

ReactDOM.render(
  <IllustrateMergingStateUpdates />,
  document.getElementById('root-7')
);
