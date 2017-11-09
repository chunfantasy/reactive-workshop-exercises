import React from 'react';
import ReactDOM from 'react-dom';

const IfUser = ({Component, ...props}) => {
  return props.user && <Component {...props} />;
};
const User = ({user}) => <div>Name: {user.name}</div>;

ReactDOM.render(
  <div>
    <IfUser user={{name: 'Myamoto'}} Component={User} />
    <User user={null} Component={User} />
  </div>,
  document.getElementById('root-3')
);
