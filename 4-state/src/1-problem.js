import React from 'react';
import ReactDOM from 'react-dom';

const MyIPAddress = ({address}) => <div>
  {address || 'Loading...'}
</div>;

const render = address => ReactDOM.render(
  <MyIPAddress address={address} />,
  document.getElementById('root-1')
);
render();
fetch('https://api.ipify.org/')
  .then(response => response.text())
  .then(render);
