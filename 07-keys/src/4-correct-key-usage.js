import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => <div>{name}</div>;

const Greetings = () => (
  <div>
    {['Myamoto', 'Hattori', 'Dave'].map((name, i) => (
      <Hello key={i} name={name} />
    ))}
  </div>
);

render(<Greetings />, document.getElementById('root-4'));
