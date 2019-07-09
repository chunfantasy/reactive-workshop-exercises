import React, { memo, Component, PureComponent } from 'react';

class Friends1 extends Component {
  render() {
    console.log('Friends1');
    return (
      <ul>
        {this.props.friends.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    );
  }
}

class Friends2 extends PureComponent {
  render() {
    console.log('Friends2');
    return (
      <ul>
        {this.props.friends.map(name => (
          <li>{name}</li>
        ))}
      </ul>
    );
  }
}

const Friends3 = memo(({ friends }) => {
  console.log('Friends3');
  return (
    <ul>
      {friends.map(name => (
        <li>{name}</li>
      ))}
    </ul>
  );
});

class AddressBook extends Component {
  state = { value: 0, friends: [] };
  increment = () => this.setState(({ value }) => ({ value: value + 1 }));
  add1 = () => {
    const state = this.state;
    state.friends.push(`Friend ${state.friends.length}`);
    this.setState(state);
  };
  add2 = () => {
    this.setState({
      friends: [...this.state.friends, `Friend ${this.state.friends.length}`]
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.increment}>{this.state.value}</button>
        <button onClick={this.add1}>Add friend 1</button>
        <button onClick={this.add2}>Add friend 2</button>
        <Friends1 friends={this.state.friends} />
        <Friends2 friends={this.state.friends} />
        <Friends3 friends={this.state.friends} />
      </div>
    );
  }
}

export default AddressBook;
