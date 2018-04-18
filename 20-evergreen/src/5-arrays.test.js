describe('arrays', function () {
  test('should understand Array.from', function () {
    expect(Array.from('Myamoto')).toEqual(__);
    expect(Array.from({length: 10}, (_, i) => i * 2)).toEqual(__);
  });
  test('should understand Array.prototype.map', function () {
    const samurai = [
      {name: 'Myamoto', age: 23},
      {name: 'Hattori', age: 34},
      {name: 'Shimazo', age: 45}
    ];
    expect(samurai.map(s => s.age).map(n => n + 1)).toEqual(__);
  });
  test('should understand Array.prototype.filter', function () {
    const samurai = [
      {name: 'Myamoto', age: 23},
      {name: 'Hattori', age: 34},
      {name: 'Shimazo', age: 45}
    ];
    expect(samurai.filter(s => s.age > 30)).toEqual(__);
  });
  test('should understand Array.prototype.reduce', function () {
    const samurai = [
      {name: 'Myamoto', age: 23},
      {name: 'Hattori', age: 34},
      {name: 'Shimazo', age: 45}
    ];
    expect(samurai.reduce((acc, s) => acc + s.age, 0)).toEqual(__);
  });
});
