const Observable = function (fn) {
  return {
    subscribe: listener => fn({next: listener})
  };
};
Observable.create = fn => new Observable(fn);

Observable.interval = period => Observable.create(observer => {
  let count = 0;
  const interval = setInterval(() => observer.next(count++), period);
  return () => clearInterval(interval);
});
const observable1 = Observable.interval(100);
const unsubscribe1 = observable1.subscribe(v => console.log('observable1', v));
setTimeout(unsubscribe1, 1000);

Observable.fromEvent = (target, eventType) => Observable.create(observer => {
  const listener = e => observer.next(e);
  target.addEventListener(eventType, listener);
  return () => target.removeEventListener(eventType, listener);
});

const observable2 = Observable.fromEvent(document, 'click');
const unsubscribe2 = observable2.subscribe(e => console.log('observable2', e));
setTimeout(unsubscribe2, 3000);
