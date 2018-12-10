import React from 'react';
import { render } from 'react-dom';

const messages = [
  'They don’t make bugs like Bunny anymore.',
  'Talk is cheap. Show me the code.',
  'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.',
  'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.',
  'In theory, theory and practice are the same. In practice, they’re not.',
  'Good design adds value faster than it adds cost.'
];

const MessageOfTheDay = () => (
  <div>{messages[Math.floor(messages.length * Math.random())]}</div>
);

render(<MessageOfTheDay />, document.getElementById('root-ex-1'));
