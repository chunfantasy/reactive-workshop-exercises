import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Counters from './1-problem.js';
import Counters2 from './2-move-on-up.js';
import {CounterContainer, Counter} from './3-children.js';

ReactDOM.render(
  <Counters />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <Counters2 />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <CounterContainer>
    <div>
      <Counter value={this.state.value} onIncrement={this.increment} />
      <Counter value={this.state.value} onIncrement={this.increment} />
    </div>
  </CounterContainer>,
  document.getElementById('root-3')
);
