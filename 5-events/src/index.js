import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Counter from './1-basic.js';
import BrokenCounter from './2-broken.js';
import CounterWithBind1 from './3-fixed.js';
import CounterWithBind2 from './4-another-solution.js';
import CounterExperimental from './5-another-solution.js';

ReactDOM.render(
  <Counter />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <BrokenCounter />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <CounterWithBind1 />,
  document.getElementById('root-3')
);

ReactDOM.render(
  <CounterWithBind2 />,
  document.getElementById('root-4')
);

ReactDOM.render(
  <CounterExperimental />,
  document.getElementById('root-5')
);
