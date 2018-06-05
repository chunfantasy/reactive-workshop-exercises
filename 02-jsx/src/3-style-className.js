import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(<HelloWorld />, document.getElementById('root-3'));
