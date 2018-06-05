import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const __ = 'replace me so that the test is passing';

test('you understand map', function() {
  let result = 0;
  Observable.range(1, 3)
    .map(x => x * x)
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand filter', function() {
  let result = 0;
  Observable.range(1, 10)
    .filter(x => !!(x % 2))
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand map & filter', function() {
  let result = 0;
  Observable.range(1, 10)
    .filter(x => !!(x % 2))
    .map(x => x * x)
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand flatMap', function() {
  let result = '';
  Observable.range(1, 3)
    .flatMap(x => Observable.range(1, x))
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

jest.useFakeTimers();

test('you understand throttleTime', function() {
  let result = '';
  Observable.timer(0, 1000)
    .throttleTime(3000)
    .subscribe(t => (result += t));
  jest.runTimersToTime(9999);
  expect(result).toBe(__);
});
