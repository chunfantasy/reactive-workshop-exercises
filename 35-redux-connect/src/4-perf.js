import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { compose } from 'recompose';

const tap = fn => Component => (...args) => (fn(...args), Component(...args));

const Counter = compose(
  connect(
    state => ({ value: state.counter }),
    dispatch => ({
      onIncrement: () => dispatch({ type: 'INCREMENT' })
    })
  ),
  tap(console.log.bind(console, 'Counter'))
)(({ value, onIncrement }) => <button onClick={onIncrement}>{value}</button>);

const Toggler = compose(
  connect(
    state => ({ value: state.flag }),
    dispatch => ({
      onToggle: () => dispatch({ type: 'TOGGLE' })
    })
  ),
  tap(console.log.bind(console, 'Toggler'))
)(({ value, onToggle }) => <button onClick={onToggle}>{'' + value}</button>);

const store = createStore(
  combineReducers({
    counter: (counter = 0, action) =>
      action.type === 'INCREMENT' ? counter + 1 : counter,
    flag: (flag = false, action) => (action.type === 'TOGGLE' ? !flag : flag)
  })
);

render(
  <Provider store={store}>
    <div>
      <Counter />
      <Toggler />
    </div>
  </Provider>,
  document.getElementById('root-4')
);
