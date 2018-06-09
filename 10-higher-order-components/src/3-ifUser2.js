import React from 'react';
import { render } from 'react-dom';

const IfUser = ({ Component, ...props }) => {
  return props.user && <Component {...props} />;
};
const User = ({ user }) => <div>Name: {user.name}</div>;

render(
  <div>
    <IfUser user={{ name: 'Myamoto' }} Component={User} />
    <IfUser user={null} Component={User} />
  </div>,
  document.getElementById('root-3')
);
