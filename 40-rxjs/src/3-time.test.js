import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

jest.useFakeTimers();

const __ = 'replace me so that the test is passing';
// beforeEach(() => jasmine.clock().install());
// afterEach(() => jasmine.clock().uninstall());

it('should understand Observable.timer', function () {
  let result = '';
  Observable.timer(0, 1000).subscribe(t => result += t);
  jest.runTimersToTime(9999);
  expect(result).toBe(__);
  jest.runTimersToTime(2);
  expect(result).toBe(__);
});

it('should understand throttleTime', function () {
  let result = '';
  Observable.timer(0, 1000).throttleTime(3000).subscribe(t => result += t);
  jest.runTimersToTime(9999);
  expect(result).toBe(__);
});
