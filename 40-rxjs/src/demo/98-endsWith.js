import { Observable, from } from 'rxjs';
import { concat } from 'rxjs/operators';

const endWith = arr => observable =>
  Observable.create(observer => {
    observable.subscribe({
      next: x => observer.next(x),
      error: err => observer.error(err),
      complete: () => {
        arr.forEach(e => observer.next(e));
        observer.complete();
      }
    });
  });
const endWith1 = arr => observable => observable.pipe(concat(arr));
const endWith2 = arr => concat(arr);
const endWith3 = concat;

const stream$ = from([1]).pipe(
  endWith([2, 3]),
  concat([4, 5]),
  endWith1([6, 7]),
  endWith2([8, 9]),
  endWith3([10, 11])
);

stream$.subscribe(console.log, console.log, console.log);
