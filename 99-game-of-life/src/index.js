import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './gameOfLife/Game';

ReactDOM.render(<Game rows={10} columns={10} />, document.getElementById('root'));
