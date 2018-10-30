const __ = 'replace me so that the test is passing';

describe('arrays', function() {
  test('should understand Array.from', function() {
    expect(Array.from('Myamoto')).toEqual(__);
    expect(Array.from({ length: 10 }, (_, i) => i * 2)).toEqual(__);
  });
  test('should understand Array.prototype.map', function() {
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.map(s => s.age).map(n => n + 1)).toEqual(__);
  });
  test('should understand Array.prototype.filter', function() {
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.filter(s => s.age > 30)).toEqual(__);
  });
  test('should understand Array.prototype.reduce 1', function() {
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.reduce((acc, s) => acc + s.age, 0)).toEqual(__);
  });
  test('should understand Array.prototype.reduce 2', function() {
    Array.prototype.myMap = function(fn) {
      //TODO implement using Array.prototype.reduce so that the test is passing
    };
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.myMap(s => s.age).map(n => n + 1)).toEqual([24, 35, 46]);
  });
  test('should understand Array.prototype.reduce 3', function() {
    Array.prototype.myFilter = function(fn) {
      //TODO implement using Array.prototype.reduce so that the test is passing
    };
    const samurai = [
      { name: 'Myamoto', age: 23 },
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ];
    expect(samurai.myFilter(s => s.age > 30)).toEqual([
      { name: 'Hattori', age: 34 },
      { name: 'Shimazo', age: 45 }
    ]);
  });
});
