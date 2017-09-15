import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const __ = 'replace me so that the test is passing';

it('should understand Subject', function () {
  let subject = new Subject(), result = 0;
  subject.subscribe(x => result += x);

  subject.next(1);
  subject.next(2);
  subject.next(3);

  expect(result).toBe(__);
});
it('should understand Subject 2', function () {
  let subject = new Subject(), result = 0;
  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.subscribe(x => result += x);

  expect(result).toBe(__);
});
it('should understand BehaviorSubject', function () {
  let subject = new BehaviorSubject(0), result = 0;
  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.subscribe(x => result += x);

  expect(result).toBe(__);
});
it('should understand ReplaySubject', function () {
  let subject = new ReplaySubject(), result = 0;
  subject.next(1);
  subject.next(2);
  subject.next(3);

  subject.subscribe(x => result += x);

  expect(result).toBe(__);
});
