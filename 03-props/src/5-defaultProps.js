import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => <div>Hello {name}!</div>;

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps = {
  name: 'World'
};

render(
  <div>
    <Hello name="Myamoto" />
    <Hello />
  </div>,
  document.getElementById('root-5')
);
