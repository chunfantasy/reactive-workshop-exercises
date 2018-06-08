import { range, timer } from 'rxjs';
import { filter, flatMap, map, throttleTime } from 'rxjs/operators';

const __ = 'replace me so that the test is passing';

test('you understand map', function() {
  let result = 0;
  range(1, 3)
    .pipe(map(x => x * x))
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand filter', function() {
  let result = 0;
  range(1, 10)
    .pipe(filter(x => !!(x % 2)))
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand map & filter', function() {
  let result = 0;
  range(1, 10)
    .pipe(
      filter(x => !!(x % 2)),
      map(x => x * x)
    )
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand flatMap', function() {
  let result = '';
  range(1, 3)
    .pipe(flatMap(x => range(1, x)))
    .subscribe(x => (result += x));
  expect(result).toBe(__);
});

jest.useFakeTimers();

test('you understand throttleTime', function() {
  let result = '';
  timer(0, 1000)
    .pipe(throttleTime(3000))
    .subscribe(t => (result += t));
  jest.runTimersToTime(9999);
  expect(result).toBe(__);
});
