import React from 'react';
import { render } from 'react-dom';

import './index.css';
import LoginForm from './1-input.js';
import FeedbackForm from './2-textarea.js';
import ThemeSelectionForm from './3-select.js';
import LoginForm2 from './4-computed-property-name-trick.js';

import './ex-1';

render(<LoginForm />, document.getElementById('root-1'));

render(<FeedbackForm />, document.getElementById('root-2'));

render(<ThemeSelectionForm />, document.getElementById('root-3'));

render(<LoginForm2 />, document.getElementById('root-4'));
