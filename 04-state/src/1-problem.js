import React from 'react';
import ReactDOM from 'react-dom';

const MyIp = ({ address }) => <div>{address}</div>;

fetch('/api/ipify')
  .then(response => response.text())
  .then(address => {
    ReactDOM.render(
      <MyIp address={address} />,
      document.getElementById('root-1')
    );
  });
