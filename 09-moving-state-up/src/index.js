import React from 'react';
import { render } from 'react-dom';

import './index.css';

import Counters from './1-problem.js';
import Counters2 from './2-move-on-up.js';
import CounterAsContainer from './3-container';
import CounterWithProps from './4-1-context-motivation';
import CounterWithContext from './4-context';
import CounterWithUseContext from './5-useContext';

import './ex-2';
import './ex-3';

render(<Counters />, document.getElementById('root-1'));
render(<Counters2 />, document.getElementById('root-2'));
render(<CounterAsContainer />, document.getElementById('root-3'));
render(<CounterWithProps />, document.getElementById('root-4-1'));
render(<CounterWithContext />, document.getElementById('root-4'));
render(<CounterWithUseContext />, document.getElementById('root-5'));
