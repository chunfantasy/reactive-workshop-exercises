import React from 'react';
import { render } from 'react-dom';

const If = condition => Component => props => {
  return condition(props) && <Component {...props} />;
};
let User = ({ user }) => <div>Name: {user.name}</div>;
User = If(props => props.user)(User);
let Score = ({ score }) => <div>Points: {score.points}</div>;
Score = If(props => props.score)(Score);

render(
  <div>
    <User user={{ name: 'Myamoto' }} />
    <Score score={{ points: 123 }} />
    <User user={null} />
    <Score score={null} />
  </div>,
  document.getElementById('root-4')
);
