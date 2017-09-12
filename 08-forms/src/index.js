import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import LoginForm from './1-input.js';
import FeedbackForm from './2-textarea.js';
import ThemeSelectionForm from './3-select.js';
import LoginForm2 from './4-computed-property-name-trick.js';
import './dont-peek/ex-1';

ReactDOM.render(
  <LoginForm />,
  document.getElementById('root-1')
);

ReactDOM.render(
  <FeedbackForm />,
  document.getElementById('root-2')
);

ReactDOM.render(
  <ThemeSelectionForm />,
  document.getElementById('root-3')
);

ReactDOM.render(
  <LoginForm2 />,
  document.getElementById('root-4')
);
