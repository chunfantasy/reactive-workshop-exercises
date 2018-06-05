import PropTypes from 'prop-types';
import { Component } from 'react';

class Provider extends Component {
  constructor(props, context) {
    super(props, context);
    this.store = props.store;
  }

  getChildContext() {
    return {
      store: this.store
    };
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
};

export default Provider;
