import React, { Component } from 'react';
import classnames from 'classnames';

class Cell extends Component {
  render() {
    const {row, column, isAlive, onToggle} = this.props;
    return (
      <div
        className={classnames({
          cell: true,
          alive: isAlive
        })}
        style={{
          top: 20 * row,
          left: 20 * column
        }}
        onClick={onToggle}
      />
    );
  }
}

export default Cell;
