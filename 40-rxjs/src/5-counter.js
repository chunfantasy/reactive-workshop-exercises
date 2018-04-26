import { Observable } from 'rxjs/Observable';

const start$ = Observable.fromEvent(document.getElementById('start'), 'click');
const stop$ = Observable.fromEvent(document.getElementById('stop'), 'click');
const interval$ = Observable.interval(1000);

start$.switchMap(e => interval$)
start$.switchMapTo(interval$)

const intervalThatStartsAndStops$ = start$
  .switchMap(e => interval$.startWith(0).takeUntil(stop$))
  .startWith(0)
  .scan(acc => acc + 1)

intervalThatStartsAndStops$.subscribe(console.log);