import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Alerter from './1-onClick.js';
import Alerter2 from './1-onClick2.js';
import BrokenCounter from './2-problem.js';
import CounterWithBind1 from './3-fixed-with-bind-1.js';
import CounterWithBind2 from './4-fixed-with-bind-2.js';
import CounterExperimental from './5-fixed-es2017.js';
import CounterWithArrow from './6-fixed-arrow.js';

import './ex-2';

ReactDOM.render(<Alerter />, document.getElementById('root-1'));

ReactDOM.render(<Alerter2 />, document.getElementById('root-12'));

ReactDOM.render(<BrokenCounter />, document.getElementById('root-2'));

ReactDOM.render(<CounterWithBind1 />, document.getElementById('root-3'));

ReactDOM.render(<CounterWithBind2 />, document.getElementById('root-4'));

ReactDOM.render(<CounterExperimental />, document.getElementById('root-5'));

ReactDOM.render(<CounterWithArrow />, document.getElementById('root-6'));
