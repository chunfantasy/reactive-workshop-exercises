import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const HelloWorld = () => {
  const styleObject = {
    backgroundColor: 'grey',
    color: 'blue'
  };
  const classObject = {
    error: true,
    critical: 2 > 3
  };
  return (
    <div className={classnames(classObject)} style={styleObject}>
      Hello!
    </div>
  );
};

ReactDOM.render(<HelloWorld />, document.getElementById('root-4'));
