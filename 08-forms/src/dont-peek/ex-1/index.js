import React, { Component } from 'react';
import { render } from 'react-dom';
import classnames from 'classnames';
import './style.css';

const filters = {
  all: () => true,
  removed: friend => friend.isRemoved,
  notRemoved: friend => !friend.isRemoved
};

class Greetings extends Component {
  state = {
    friends: [
      { name: 'First', id: 0 },
      { name: 'Second', isRemoved: true, id: 1 },
      { name: 'Third', id: 2 },
      { name: 'Fourth', isRemoved: true, id: 3 }
    ],
    name: '',
    filter: 'all'
  };
  id = this.state.length;
  add = event => {
    event.preventDefault();
    this.setState(({ friends, name }) => ({
      friends: [...friends, { name, id: this.id++ }],
      name: ''
    }));
  };
  remove = id =>
    this.setState(({ friends }) => ({
      friends: friends.map(friend => (friend.id === id ? { ...friend, isRemoved: !friend.isRemoved } : friend))
    }));
  onChange = event => this.setState({ name: event.target.value });
  render() {
    const { friends, name } = this.state;
    return (
      <div>
        {Object.keys(filters).map(filter => (
          <span className={classnames({ selected: filter === this.state.filter })} onClick={() => this.setState({ filter })}>
            {filter}{' '}
          </span>
        ))}
        <form onSubmit={this.add}>
          <label>
            Name:
            <input type="text" value={name} onChange={this.onChange} />
          </label>
          <input type="submit" value="Add" />
        </form>
        {friends.length
          ? friends.filter(filters[this.state.filter]).map(({ name, id, isRemoved }) => {
              return (
                <div key={id} className={classnames({ removed: isRemoved })} onClick={() => this.remove(id)}>
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
