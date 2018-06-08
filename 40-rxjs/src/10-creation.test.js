import { from, fromEvent, range, timer } from 'rxjs';

const __ = 'replace me so that the test is passing';

test('you understand Observable.from', function() {
  let result = 0;
  from([1, 2, 3]).subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand Observable.range', function() {
  let result = 0;
  range(1, 10).subscribe(x => (result += x));
  expect(result).toBe(__);
});

test('you understand fromEvent', function() {
  let element = document.createElement('div'),
    result = '';
  fromEvent(element, 'click').subscribe(() => (result = 'clicked'));
  element.click();

  expect(result).toBe(__);
});

jest.useFakeTimers();

test('you understand Observable.timer', function() {
  let result = '';
  timer(0, 1000).subscribe(t => (result += t));
  jest.runTimersToTime(9999);
  expect(result).toBe(__);
  jest.runTimersToTime(2);
  expect(result).toBe(__);
});
