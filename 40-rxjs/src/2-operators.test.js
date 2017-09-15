import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
const __ = 'replace me so that the test is passing';

it('should understand map', function () {
  let result = 0;
  Observable.range(1, 3)
    .map(x => x * x)
    .subscribe(x => result += x);
  expect(result).toBe(__);
});

it('should understand filter', function () {
  let result = 0;
  Observable.range(1, 10)
    .filter(x => !!(x % 2))
    .subscribe(x => result += x);
  expect(result).toBe(__);
});

it('should understand map & filter', function () {
  let result = 0;
  Observable.range(1, 10)
    .filter(x => !!(x % 2))
    .map(x => x * x)
    .subscribe(x => result += x);
  expect(result).toBe(__);
});

it('should understand flatMap', function () {
  let result = '';
  Observable.range(1, 3)
    .flatMap(x => Observable.range(1, x))
    .subscribe(x => result += x);
  expect(result).toBe(__);
});
