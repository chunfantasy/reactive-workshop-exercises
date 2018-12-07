import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const log = (...msg) => fn => observer => {
  console.log(...msg, 'subscribe');
  const result = fn(observer);
  return () => {
    console.log(...msg, 'unsubscribe');
    result();
  };
};

const myFrom = arr =>
  Observable.create(
    log('fromArray')(observer => {
      arr.forEach(v => observer.next(v));
      observer.complete();
      return () => {};
    })
  );

const myMap = predicate => observable =>
  Observable.create(observer =>
    observable.subscribe({
      next: x => {
        try {
          observer.next(predicate(x));
        } catch (err) {
          observer.error(err);
        }
      },
      error: err => observer.error(err),
      complete: () => observer.complete()
    })
  );

const debug = ['next', 'error', 'complete'].map(s =>
  console.log.bind(console, s)
);

myFrom(['1', '2', '3'])
  .pipe(map(x => x[0]))
  .subscribe(...debug)
  .unsubscribe();

myFrom(['1', '2', '3'])
  .pipe(myMap(x => x[0]))
  .subscribe(...debug)
  .unsubscribe();

myFrom(['1', '2', undefined, '3'])
  .pipe(map(x => x[0]))
  .subscribe(...debug)
  .unsubscribe();

myFrom(['1', '2', undefined, '3'])
  .pipe(myMap(x => x[0]))
  .subscribe(...debug)
  .unsubscribe();
