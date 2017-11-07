const __ = 'replace me so that the test is passing';

test('you understand asynchronous tests', function () {
  expect(1).toBe(1);
  setTimeout(function () {
    expect(1).toBe(2);
  }, 1000);
});
test('you understand asynchronous tests 2', function (done) {
  setTimeout(function () {
    expect(1).toBe(2);
    done();
  }, 1000);
});
test('you understand setInterval', function (done) {
  let result = '';
  const interval = setInterval(function () {
    result += 'x';
  }, 1000);
  setTimeout(function () {
    clearInterval(interval);
    expect(result).toBe(__);
    done();
  }, 3500);
});
