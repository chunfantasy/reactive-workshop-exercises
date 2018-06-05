const Observable = function(fn) {
  return {
    subscribe: (observerOrNext, error, complete) =>
      fn(
        typeof observerOrNext === 'object'
          ? observerOrNext
          : { next: observerOrNext, error, complete }
      )
  };
};
Observable.create = fn => new Observable(fn);

Observable.from = array =>
  Observable.create(observer => {
    array.forEach(element => observer.next(element));
    observer.complete && observer.complete();
  });
const observable = Observable.from([
  { name: 'First' },
  { name: 'Second' },
  undefined,
  { name: 'Third' }
]);
const unsubscribe = observable.subscribe(
  v => console.log('next', v.name),
  e => console.log('error', e),
  () => console.log('complete')
);
