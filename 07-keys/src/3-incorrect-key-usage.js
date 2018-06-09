import React from 'react';
import { render } from 'react-dom';

const Hello = ({ id, name }) => <div key={id}>{name}</div>;

const Greetings = () => (
  <div>
    {['Myamoto', 'Hattori', 'Dave'].map((name, i) => (
      <Hello id={i} name={name} />
    ))}
  </div>
);

render(<Greetings />, document.getElementById('root-3'));
