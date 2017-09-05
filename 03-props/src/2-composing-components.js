import React from 'react';

const Hello = ({name}) => <div>Hello {name}!</div>;

const Greetings = () => {
  return (
    <div>
      {
        ['Myamoto', 'Hattori', 'Dave']
          .map(name => <Hello name={name} />)
      }
    </div>
  );
};

export default Greetings;
