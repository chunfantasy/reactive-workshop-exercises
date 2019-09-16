import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';

const MyIp = () => {
  const [address, setAddress] = useState('Loading...');
  useEffect(() => {
    fetch('/api/ipify')
      .then(response => response.text())
      .then(address => setAddress(address));
  }, []);
  return <div>{address}</div>;
};

render(<MyIp />, document.getElementById('root-8'));
