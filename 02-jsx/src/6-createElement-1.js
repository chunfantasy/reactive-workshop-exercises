import React from 'react';
import ReactDOM from 'react-dom';

const Child = () => <div>Hello World!</div>;

const Parent = () => <div>
  <Child />
  <input type="button" value="Click me" />
</div>;

ReactDOM.render(
  <Parent />,
  document.getElementById('root-6-1')
);
