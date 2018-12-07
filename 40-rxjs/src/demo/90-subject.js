import { Subject, interval } from 'rxjs';
import { startWith, take } from 'rxjs/operators';
import log from './util/logSubscriber';

const counter$ = interval(1000).pipe(
  take(3),
  startWith(-1)
);
const subject = new Subject();
subject.subscribe(...log('first'));
counter$.subscribe(subject);
subject.subscribe(...log('second'));
