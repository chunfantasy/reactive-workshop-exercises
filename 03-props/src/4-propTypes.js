import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name}) => <div>Hello {name}!</div>;

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('root-4')
);
