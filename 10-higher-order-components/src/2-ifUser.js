import React from 'react';
import ReactDOM from 'react-dom';

const IfUser = Component => props => {
  return props.user && <Component {...props} />;
};
let User = ({user}) => user && <div>Name: {user.name}</div>;
User = IfUser(User);

ReactDOM.render(
  <div>
    <User user={{name: 'Myamoto'}} />
    <User user={null} />
  </div>,
  document.getElementById('root-2')
);
