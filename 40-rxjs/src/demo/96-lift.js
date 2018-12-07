import { from, Subscriber } from 'rxjs';
import { log } from './logSubscriber';

class MapSubscriber extends Subscriber {
  constructor(destination, project) {
    super(destination);
    this.project = project;
  }

  _next(value) {
    try {
      this.destination.next(this.project(value));
    } catch (err) {
      this.destination.error(err);
    }
  }
}

class MapOperator {
  constructor(project) {
    console.log('MapOperator');
    this.project = project;
  }

  call(subscriber, source) {
    console.log('call');
    return source.subscribe(new MapSubscriber(subscriber, this.project));
  }
}

const map = selector => observable =>
  observable.lift(new MapOperator(selector));

const map2 = selector => observable =>
  observable.lift({
    call: (subscriber, source) =>
      source.subscribe(value => subscriber.next(selector(value)))
  });

from([1, 2, 3])
  .pipe(map(x => 2 * x))
  .pipe(map2(x => 2 * x))
  .subscribe(...log);
