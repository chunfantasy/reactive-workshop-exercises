import React from 'react';
import ReactDOM from 'react-dom';

const Clock = () => <div>
  {new Date().toLocaleTimeString()}
</div>;

const render = address => ReactDOM.render(
  <Clock />,
  document.getElementById('root-1')
);
render();
setInterval(render, 1000);
