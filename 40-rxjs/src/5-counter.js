import { fromEvent, interval } from 'rxjs';
import { scan, switchMap, takeUntil } from 'rxjs/operators';

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const intervalThatStartsAndStops$ = fromEvent(start, 'click').pipe(
  switchMap(e => interval(1000)),
  takeUntil(fromEvent(stop, 'click')),
  scan(acc => acc + 1)
);

intervalThatStartsAndStops$.subscribe(console.log);
