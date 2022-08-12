const byDepth = require('./byDepth.js');
const path = require('path');

test('byDepth()', function () {
  const paths = [
    'hello',
    path.join('hello', 'world', 'foo', 'bar'),
    path.join('hello', 'world', 'tidy') + path.sep, //ignores trailing separator
    path.join('hello', 'world'),
    path.join('foo', 'bar'),
  ];

  const sorted = byDepth(paths);
  const result = [
    'hello',
    path.join('foo', 'bar'),
    path.join('hello', 'world'),
    path.join('hello', 'world', 'tidy') + path.sep, //won't remove trailing separator
    path.join('hello', 'world', 'foo', 'bar'),
  ];

  expect(sorted).toStrictEqual(result);
});
