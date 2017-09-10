import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({name}) => <div>Hello {name}!</div>;

Hello.propTypes = {
  name: PropTypes.string
};

Hello.defaultProps = {
  name: 'World'
};

ReactDOM.render(
  <div>
    <Hello name="Myamoto" />
    <Hello />
  </div>,
  document.getElementById('root-5')
);
