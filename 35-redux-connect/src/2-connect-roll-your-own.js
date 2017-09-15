import PropTypes from 'prop-types';
import React, {Component} from 'react';

const connect = (stateToProps, mapDispatchToProps) => MyComponent => {
  class Connect extends Component {
    componentDidMount = () => {
      this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }
  
    componentWillUnmount = () => this.unsubscribe();

    render() {
      const props = {
        ...stateToProps(this.context.store.getState()),
        ...mapDispatchToProps(this.context.store.dispatch)
      };
      return <MyComponent {...props} />;
    }
  };
  Connect.contextTypes = {
    store: PropTypes.object
  };
  return Connect;
};

export default connect;
