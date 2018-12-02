const anotherReducerCombinator = reducers => (state, action) => {
  const reducer = reducers[action.type];
  return (reducer && reducer(state, action)) || state;
};

const reducer = anotherReducerCombinator({
  INCREMENT: (state, action) => state + 1,
  DECREMENT: (state, action) => state - 1,
  DOUBLE: (state, action) => state * 2
});

console.log(reducer(123, { type: 'INCREMENT' }));
console.log(reducer(123, { type: 'DECREMENT' }));
console.log(reducer(123, { type: 'UNKNOWN' }));
