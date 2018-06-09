import PropTypes from 'prop-types';
import React from 'react';
import { render } from 'react-dom';

const Hello = ({ name }) => <div>Hello {name}!</div>;

Hello.propTypes = {
  name: PropTypes.string.isRequired
};

render(<Hello name="World" />, document.getElementById('root-4'));
