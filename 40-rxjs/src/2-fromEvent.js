const MyObservable = {};
MyObservable.fromEvent = (target, eventType) => {
  return {
    subscribe: fn => {
      target.addEventListener(eventType, fn);
      return () => target.removeEventListener(eventType, fn);
    }
  };
};

const observable = MyObservable.fromEvent(document, 'click');
const unsubscribe = observable.subscribe(e => console.log(e));
setTimeout(unsubscribe, 3000);
