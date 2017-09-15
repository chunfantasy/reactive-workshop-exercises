// import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';

const __ = 'replace me so that the test is passing';
it('should understand Observable.from', function () {
  let result = 0;
  Observable.from([1, 2, 3])
    .subscribe(x => result += x);
  expect(result).toBe(__);
});
it('should understand Observable.range', function () {
  let result = 0;
  Observable.range(1, 10)
    .subscribe(x => result += x);
  expect(result).toBe(__);
});
it('should understand fromEvent', function () {
  let element = document.createElement('div'), result = '';
  Observable.fromEvent(element, 'click').subscribe(() => result = 'clicked');
  element.click();

  expect(result).toBe(__);
});
