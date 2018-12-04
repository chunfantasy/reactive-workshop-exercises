import React, { Component } from 'react';
import { render } from 'react-dom';

class Greetings extends Component {
  state = { friends: [], name: '' };
  id = 0;
  add = event => {
    event.preventDefault();
    this.setState(({ friends, name }) => ({
      friends: [...friends, { name, id: this.id++ }],
      name: ''
    }));
  };
  remove = id =>
    this.setState(({ friends }) => ({
      friends: friends.filter(friend => friend.id !== id)
    }));
  onChange = event => this.setState({ name: event.target.value });
  render() {
    const { friends, name } = this.state;
    return (
      <div>
        <form onSubmit={this.add}>
          <label>
            Name:
            <input type="text" value={name} onChange={this.onChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
        {friends.length
          ? friends.map(({ name, id }) => {
              return (
                <div key={id} onClick={() => this.remove(id)}>
                  {name}
                </div>
              );
            })
          : 'No friends :('}
      </div>
    );
  }
}

render(<Greetings />, document.getElementById('root-ex-1'));
