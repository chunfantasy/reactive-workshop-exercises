const __ = 'replace me so that the test is passing';

test('you understand pick 1', function() {
  const pick = propertyName => object => object[propertyName];
  const samurai = { name: 'Myamoto', age: 23 };
  expect(pick('name')(samurai)).toBe(__);
});

test('you understand pick 2', function() {
  const pick = propertyName => object => object[propertyName];
  const samurai = [{ name: 'Myamoto', age: 23 }, { name: 'Hattori', age: 32 }];

  expect(samurai.map(s => pick('name')(s))).toEqual(__);
  expect(samurai.map(pick('name'))).toEqual(__);
});

test('you understand pick 3', function() {
  const pick = propertyName => object => object[propertyName];
  const samurai = [
    { name: 'Myamoto', address: { street: 'Samurai Way', postcode: 'SW 1' } },
    { name: 'Hattori', address: { street: 'Ninja Way', postcode: 'NW 2' } }
  ];

  expect(samurai.map(s => pick('street')(pick('address')(s)))).toEqual(__);
});

test('you understand compose2', function() {
  const pick = propertyName => object => object[propertyName];
  const compose2 = (f1, f2) => (...args) => f1(f2(...args));
  const samurai = [
    { name: 'Myamoto', address: { street: 'Samurai Way', postcode: 'SW 1' } },
    { name: 'Hattori', address: { street: 'Ninja Way', postcode: 'NW 2' } }
  ];

  const whatDoesThisDo = compose2(pick('street'), pick('address'));
  expect(samurai.map(whatDoesThisDo)).toEqual(__);
});

test('you understand compose', function() {
  const pick = propertyName => object => object[propertyName];
  const compose = (...fns) => (...args) =>
    fns.reduceRight((result, fn) => fn(result), ...args);
  const samurai = [
    { name: 'Myamoto', address: { street: 'Samurai Way', postcode: 'SW 1' } },
    { name: 'Hattori', address: { street: 'Ninja Way', postcode: 'NW 2' } }
  ];

  const whatDoesThisDo = compose(
    s => `Go to ${s}`,
    pick('street'),
    pick('address')
  );
  expect(samurai.map(whatDoesThisDo)).toEqual(__);
});

test('you understand compose 2', function() {
  const compose = (...fns) => (...args) =>
    fns.reduceRight((result, fn) => fn(result), ...args);
  const increment = x => x + 1;
  const double = x => 2 * x;

  expect(
    compose(
      double,
      increment
    )(123)
  ).toBe(__);
  expect(
    compose(
      increment,
      double
    )(123)
  ).toBe(__);
});
