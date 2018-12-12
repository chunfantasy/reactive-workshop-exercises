import React from 'react';
import { render } from 'react-dom';

const withState = (propertyName, methodName, initialValue) => Component =>
  class extends React.Component {
    state = { [propertyName]: initialValue };
    render() {
      const allProps = {
        ...this.props,
        ...this.state,
        [methodName]: newValue => this.setState({ [propertyName]: newValue })
      };
      return <Component {...allProps} />;
    }
  };

const Player = withState('isVisible', 'setVisible', true)(
  ({ name, isVisible, setVisible }) => (
    <div>
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
      {isVisible && <div>{name}</div>}
    </div>
  )
);

render(<Player name="Myamoto" />, document.getElementById('root-6'));
