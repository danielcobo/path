const ext = require('./ext.js');

test('ext()', function () {
  expect(ext('foo.txt')).toStrictEqual('.txt');
  expect(ext('./foo.txt')).toStrictEqual('.txt');
  expect(ext('foo/bar.ver7.txt')).toStrictEqual('.txt');
  expect(ext('foo/bar')).toStrictEqual('');
  expect(ext('.txt')).toStrictEqual('');
  expect(ext('./.txt')).toStrictEqual('');
});
