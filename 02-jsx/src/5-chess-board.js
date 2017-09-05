import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './5-chess-board.css';

const ChessBoard = () => {
  const n = 8;
  return <div className="board">
    {
      Array.from({length: n * n})
        .map((value, index) => ({x: index % n, y: Math.floor(index / n)}))
        .map(({x, y}) => {
          return <div
            className={classnames({
              square: true,
              black: (x + y) % 2 === 0
            })}
            style={{
              top: 20 * x,
              left: 20 * y
            }}
          />;
        })
    }
  </div>;
};

ReactDOM.render(
  <ChessBoard />,
  document.getElementById('root-5')
);
