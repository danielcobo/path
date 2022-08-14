const filter = require('./filter.js');
const dotfile = require('./dotfile.js');

test('filter()', function () {
  const paths = ['hello.js', 'hello/world.txt', '.dot'];
  //No .js files
  const noJS = paths.slice(1);

  expect(filter('./hello.txt', '.txt')).toStrictEqual(['./hello.txt']);
  expect(filter(paths, '.js')).toStrictEqual(['hello.js']);
  expect(filter(paths, ['.js'])).toStrictEqual(['hello.js']);
  expect(filter(paths, dotfile)).toStrictEqual(['.dot']);
  expect(filter(paths, '.js', false)).toStrictEqual(noJS);
});
