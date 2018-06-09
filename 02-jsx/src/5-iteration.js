import React from 'react';
import { render } from 'react-dom';

const Greetings = () => {
  return (
    <div>
      {['Myamoto', 'Hattori', 'Dave'].map(name => <div>Hello {name}</div>)}
    </div>
  );
};

render(<Greetings />, document.getElementById('root-5'));
