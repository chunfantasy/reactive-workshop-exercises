import React from 'react';
import { render } from 'react-dom';
import { combineLatest, from, interval, merge } from 'rxjs';
import { map, mapTo, scan, startWith, switchMap } from 'rxjs/operators';
import { setObservableConfig, componentFromStream, createEventHandler } from 'recompose';
import { isCellAlive, toggle, tick, GameOfLifePresentation } from './gameOfLife';

setObservableConfig({ fromESObservable: from, toESObservable: stream => stream });

const Hello = componentFromStream(props$ => props$.pipe(map(({ name }) => <div>Hello {name}</div>)));

const Clock = componentFromStream(props$ =>
  props$.pipe(
    switchMap(props => interval(props.interval).pipe(startWith(0))),
    map(() => new Date().toLocaleString()),
    map(ts => <div>{ts}</div>)
  )
);

const Counter = componentFromStream(props$ => {
  const { stream: onIncrement$, handler: onIncrement } = createEventHandler();
  return combineLatest(
    props$,
    onIncrement$.pipe(
      scan((acc, step) => acc + step, 0),
      startWith(0)
    )
  ).pipe(
    map(([props, value]) => ({ value })),
    map(({ value }) => (
      <div>
        {value}
        <button onClick={() => onIncrement(2)}>+</button>
      </div>
    ))
  );
});

const GameOfLifeContainer = componentFromStream(props$ => {
  const reducer = (acc, action) => {
    if (action.type === 'TOGGLE') {
      return toggle(acc, action.row, action.column);
    }
    if (action.type === 'TICK') {
      return tick(acc);
    }
    return acc;
  };
  const { stream: onToggle$, handler: onToggle } = createEventHandler();
  const { stream: onTick$, handler: onTick } = createEventHandler();
  return combineLatest(
    props$,
    merge(
      onToggle$.pipe(map(position => ({ type: 'TOGGLE', ...position }))),
      onTick$.pipe(mapTo({ type: 'TICK' }))
    ).pipe(
      startWith({}),
      scan(reducer)
    ),
    ({ render }, isAlive) => render({ isAlive: (row, column) => isCellAlive(isAlive, row, column), onToggle, onTick })
  );
});

const GameOfLifeContainer2 = componentFromStream(props$ => {
  const { stream: onToggle$, handler: onToggle } = createEventHandler();
  const { stream: onTick$, handler: onTick } = createEventHandler();
  return combineLatest(
    props$,
    merge(
      onToggle$.pipe(map(({ row, column }) => currentState => toggle(currentState, row, column))),
      onTick$.pipe(mapTo(tick))
    ).pipe(
      startWith({}),
      scan((currentState, action) => action(currentState))
    ),
    ({ render }, isAlive) => render({ isAlive: (row, column) => isCellAlive(isAlive, row, column), onToggle, onTick })
  );
});

const App = () => (
  <div>
    <h2>Hello World</h2>
    <Hello name="World" />

    <h2>Clock</h2>
    <Clock interval={1000} />

    <h2>Counter</h2>
    <Counter />

    <h2>Game of Life</h2>
    <GameOfLifeContainer render={props => <GameOfLifePresentation n={10} width={20} height={20} {...props} />} />

    <h2>Game of Life V2</h2>
    <GameOfLifeContainer2 render={props => <GameOfLifePresentation n={10} width={20} height={20} {...props} />} />
  </div>
);

render(<App />, document.getElementById('root'));
