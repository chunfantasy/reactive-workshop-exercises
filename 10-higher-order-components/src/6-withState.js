import React from 'react';
import ReactDOM from 'react-dom';

const withState = (propertyName, methodName, initialValue) => Component => class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {[propertyName]: initialValue};
  }
  render() {
    const allProps = {
      ...this.props,
      ...this.state,
      [methodName]: newValue => this.setState({[propertyName]: newValue})
    };
    return <Component {...allProps} />;
  }
};

const Player = withState('isVisible', 'setVisible', true)(({name, isVisible, setVisible}) => <div>
  <div onClick={() => setVisible(!isVisible)}>Toggle</div>
  {isVisible && <div>{name}</div>}
</div>);

ReactDOM.render(
  <Player name="Myamoto" />,
  document.getElementById('root-6')
);
