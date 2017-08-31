import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import './1-component/1-HelloWorld.js';

import './2-expression/1-HelloWorld.js';
import './2-expression/2-Greetings.js';
import './2-expression/3-Greetings.js';

import Clock from './3-state/1-basic.js';
import Counter from './4-events/1-basic.js';

ReactDOM.render(
  <Clock />,
  document.getElementById('root-3-1')
);
ReactDOM.render(
  <Counter />,
  document.getElementById('root-4-1')
);
