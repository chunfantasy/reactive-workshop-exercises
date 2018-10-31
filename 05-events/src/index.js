import React from 'react';
import { render } from 'react-dom';

import './index.css';
import Alerter from './1-onClick.js';
import Alerter2 from './1-onClick2.js';
import BrokenCounter from './2-problem.js';
import CounterWithBind1 from './3-fixed-with-bind-1.js';
import CounterWithBind2 from './4-fixed-with-bind-2.js';
import CounterExperimental from './5-fixed-es2017.js';
import CounterWithArrow from './6-fixed-arrow.js';
import AddressBook from './7-dont-mutate-current-state';
import Counters from './8-dont-copy-props-to-state';

import './ex-2';

render(<Alerter />, document.getElementById('root-1'));

render(<Alerter2 />, document.getElementById('root-12'));

render(<BrokenCounter />, document.getElementById('root-2'));

render(<CounterWithBind1 />, document.getElementById('root-3'));

render(<CounterWithBind2 />, document.getElementById('root-4'));

render(<CounterExperimental />, document.getElementById('root-5'));

render(<CounterWithArrow />, document.getElementById('root-6'));

render(<AddressBook />, document.getElementById('root-7'));

render(<Counters />, document.getElementById('root-8'));
