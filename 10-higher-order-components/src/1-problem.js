import React from 'react';
import ReactDOM from 'react-dom';

const User = ({user}) => user && <div>Name: {user.name}</div>;
const Score = ({score}) => score && <div>Points: {score.points}</div>;

ReactDOM.render(
  <div>
    <User user={{name: 'Myamoto'}} />
    <Score score={{points: 123}} />
    <User user={null} />
    <Score score={null} />
  </div>,
  document.getElementById('root-1')
);
