const MyObservable = {};
MyObservable.interval = period => {
  return {
    subscribe: fn => {
      let count = 0;
      const interval = setInterval(() => fn(count++), period);
      return () => clearInterval(interval);
    }
  };
};

const observable = MyObservable.interval(100);
const unsubscribe = observable.subscribe(v => console.log(v));
setTimeout(unsubscribe, 1000);
