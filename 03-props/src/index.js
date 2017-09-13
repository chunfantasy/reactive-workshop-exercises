import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import './1-basic.js';
import './2-class-components.js';
import Greetings from './3-composing-components.js';
import './4-propTypes';
import './5-defaultProps';

import './ex-2';

ReactDOM.render(
  <Greetings />,
  document.getElementById('root-3')
);
