import {createStore} from 'redux';

const combineReducers = reducerMap => (state, action) => {
  //TODO implement this
};

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};
const visibility = (state = true, action) => {
  if (action.type === 'TOGGLE') {
    return !state;
  }
  return state;
};

let store;
beforeEach(() => store = createStore(combineReducers({counter, visibility})));
it('Should understand the shape of the state tree', () => {
  expect(store.getState()).toEqual({
    counter: 0,
    visibility: true
  });
});
it('Should understand INCREMENT action', () => {
  store.dispatch({type: 'INCREMENT'});

  expect(store.getState()).toEqual({
    counter: 1,
    visibility: true
  });
});
it('Should understand TOGGLE action', () => {
  store.dispatch({type: 'TOGGLE'});

  expect(store.getState()).toEqual({
    counter: 0,
    visibility: false
  });
});
