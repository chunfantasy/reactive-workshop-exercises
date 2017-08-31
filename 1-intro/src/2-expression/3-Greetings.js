import React from 'react';
import ReactDOM from 'react-dom';
const Hello = props => <div>Hello {props.name}</div>;
const Greetings = () => {
  return <div>
    {
      ['Myamoto', 'Hattori', 'Dave']
        .map(name => <Hello name={name} />)
    }
  </div>;
};
ReactDOM.render(
  <Greetings />,
  document.getElementById('root-2-3')
);
