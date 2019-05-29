import React from 'react';
import { render } from 'react-dom';

import './index.css';
import LoginForm from './1-input.js';
import FeedbackForm from './2-textarea.js';
import ThemeSelectionForm from './3-select.js';
import LoginForm2 from './4-computed-property-name-trick.js';
import LoginFormWithHooks from './5-hooks.js';
import LoginFormWithCustomHook from './6-hooks.js';

import './ex-1';

render(<LoginForm />, document.getElementById('root-1'));

render(<FeedbackForm />, document.getElementById('root-2'));

render(<ThemeSelectionForm />, document.getElementById('root-3'));

render(<LoginForm2 />, document.getElementById('root-4'));

render(<LoginFormWithHooks />, document.getElementById('root-5'));

render(<LoginFormWithCustomHook />, document.getElementById('root-6'));
