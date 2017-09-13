import React from 'react';
import ReactDOM from 'react-dom';

const Greetings = () => {
  return <div>
    {
      ['Myamoto', 'Hattori', 'Dave']
        .map(name => <div>Hello {name}</div>)
    }
  </div>;
};

ReactDOM.render(
  <Greetings />,
  document.getElementById('root-5')
);
