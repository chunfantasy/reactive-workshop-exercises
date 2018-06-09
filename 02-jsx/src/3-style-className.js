import React from 'react';
import { render } from 'react-dom';

const HelloWorld = () => {
  const styleObject = {
    backgroundColor: 'grey',
    color: 'blue'
  };
  return (
    <div className="error" style={styleObject}>
      Hello!
    </div>
  );
};

render(<HelloWorld />, document.getElementById('root-3'));
