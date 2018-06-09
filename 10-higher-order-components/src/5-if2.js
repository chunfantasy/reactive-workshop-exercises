import React from 'react';
import { render } from 'react-dom';

const If = ({ Component, condition, ...props }) => {
  return condition(props) && <Component {...props} />;
};
const User = ({ user }) => user && <div>Name: {user.name}</div>;
const Score = ({ score }) => score && <div>Points: {score.points}</div>;

render(
  <div>
    <If
      condition={props => props.user}
      Component={User}
      user={{ name: 'Myamoto' }}
    />
    <If
      condition={props => props.score}
      Component={Score}
      score={{ points: 123 }}
    />
    <If condition={props => props.user} Component={User} user={null} />
    <If condition={props => props.score} Component={Score} score={null} />
  </div>,
  document.getElementById('root-5')
);
