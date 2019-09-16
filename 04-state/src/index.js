import React from 'react';
import { render } from 'react-dom';

import './index.css';
import './1-problem.js';
import './2-setState.js';
import Clock from './3-another-problem.js';
import ClockWithLifecycle from './4-lifecycle-methods.js';
import ClockBatching from './5-batching.js';
import ClockBatchingSolution from './6-batching-solution.js';
import IllustrateMergingStateUpdates from './7-merging-updates.js';
import './8-useState-useEffect';

import './ex-1';

render(<Clock />, document.getElementById('root-3'));

render(<ClockWithLifecycle />, document.getElementById('root-4'));

render(<ClockBatching />, document.getElementById('root-5'));

render(<ClockBatchingSolution />, document.getElementById('root-6'));

render(<IllustrateMergingStateUpdates />, document.getElementById('root-7'));
