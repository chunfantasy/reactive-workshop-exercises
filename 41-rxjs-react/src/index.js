import React from 'react';
import { render } from 'react-dom';
import { Observable } from 'rxjs';
import config from 'recompose/rxjsObservableConfig';
import {setObservableConfig, componentFromStream, createEventHandler} from 'recompose';
import './Game.css';

setObservableConfig(config);

const Hello = componentFromStream(
  props$ => props$.map(({name}) => <div>Hello {name}</div>)
);

// const Clock = componentFromStream(
//   props$ => props$
//     .map(({interval}) => Observable.interval(interval).startWith(0))
//     .switch()
//     .map(() => (new Date()).toLocaleString())
//     .map(ts => <div>{ts}</div>)
// );

const Clock = componentFromStream(
  props$ => props$
    .switchMap(({interval}) => Observable.interval(interval).startWith(0))
    .map(() => (new Date()).toLocaleString())
    .map(ts => <div>{ts}</div>)
);

const Counter = componentFromStream(
  props$ => {
    const {stream: onIncrement$, handler: onIncrement} = createEventHandler();
    return Observable.combineLatest(props$, onIncrement$.scan((acc, step) => acc + step, 0).startWith(0))
      .map(([props, value]) => ({value}))
      .map(({value}) => <div>
        {value}
        <button onClick={() => onIncrement(2)}>+</button>
      </div>);
  }
);

const GameOfLife = componentFromStream(
  props$ => {
    const cellKey = (row, column) => `${row}_${column}`;
    const reducer = (acc, action) => {
      if (action.type === 'TOGGLE') {
        const key = `${action.row}_${action.column}`;
        return {...acc, [key]: !acc[key]};
      } else if (action.type === 'TICK') {
        const numberOfNeighbours = {};
        for (let key in acc) {
          const [row, column] = key.split('_').map(p => parseInt(p, 10));
          numberOfNeighbours[key] = numberOfNeighbours[key] || 0;
          [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]].forEach(function ([offsetRow, offsetCol]) {
            const neighbourKey = cellKey(row + offsetRow, column + offsetCol);
            numberOfNeighbours[neighbourKey] = (numberOfNeighbours[neighbourKey] || 0) + 1;
          });
        }
        const result = {};
        for (let key in numberOfNeighbours) {
          if (numberOfNeighbours[key] === 3 || (acc[key] && numberOfNeighbours[key] === 2)) {
            result[key] = true;
          }
        }
        return result;
      }
      return acc;
    };
    const {stream: onTick$, handler: onTick} = createEventHandler();
    const {stream: onToggle$, handler: onToggle} = createEventHandler();
    return Observable
      .combineLatest(
        props$,
        Observable
          .merge(
            onTick$.mapTo({type: 'TICK'}),
            onToggle$.map(position => ({type: 'TOGGLE', ...position}))
          )
          .startWith({})
          .scan(reducer)
      )
      .map(([props, isAlive]) => ({...props, isAlive: (row, column) => isAlive[cellKey(row, column)], onToggle, onTick}))
      .map(props => props.render(props));
  }
);

const App = () => <div>
  <h2>Hello World</h2>
  <Hello name="World" />

  <h2>Clock</h2>
  <Clock interval={1000} />

  <h2>Counter</h2>
  <Counter />

  <h2>Game of Life</h2>
  <GameOfLife n={10} width={20} height={20} render={
    ({n, width, height, isAlive, onToggle, onTick}) => <div style={{width: n * width, height: n * height}}>
      <div>
        {
          Array.from({length: n * n})
            .map((value, index) => ({row: Math.floor(index / n), column: index % n}))
            .map(({row, column}, index) => <div
              key={index}
              className={'cell' + (isAlive(row, column) ? ' alive' : '')}
              style={{width, height, top: 20 * row, left: 20 * column}}
              onClick={() => onToggle({row, column})}
            />)
        }
      </div>
      <button onClick={onTick}>Tick</button>
    </div>
  } />
</div>;

render(<App />, document.getElementById('root'));
