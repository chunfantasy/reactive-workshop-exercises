import React from 'react';
import { render } from 'react-dom';

import './index.css';

import Players from './1-problem.js';
import PlayersWithKey from './2-key.js';
import './3-incorrect-key-usage.js';
import './4-correct-key-usage.js';
import MoreElaboratePlayers from './5-problem.js';

import './ex-2';

render(<Players />, document.getElementById('root-1'));

render(<PlayersWithKey />, document.getElementById('root-2'));

render(<MoreElaboratePlayers />, document.getElementById('root-5'));
