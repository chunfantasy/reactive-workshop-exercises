import React from 'react';

const Hello = ({ name }) => <div>Hello {name}!</div>;

const Greetings = () => (
  <div>
    <Hello name="Myamoto" />
    <Hello name="Hattori" />
    <Hello name={'Dave'} />
  </div>
);

export default Greetings;
