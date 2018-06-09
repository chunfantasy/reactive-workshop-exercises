import React from 'react';
import { render } from 'react-dom';

import './index.css';

import Counters from './1-problem.js';
import Counters2 from './2-move-on-up.js';

import './ex-2';
import './ex-3';

render(<Counters />, document.getElementById('root-1'));

render(<Counters2 />, document.getElementById('root-2'));
