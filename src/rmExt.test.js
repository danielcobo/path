const rmExt = require('./rmExt.js');

test('rmExt()', function () {
  expect(rmExt('foo.txt')).toStrictEqual('foo');
  expect(rmExt('./foo.txt')).toStrictEqual('./foo');
  expect(rmExt('foo/bar.ver7.txt')).toStrictEqual('foo/bar.ver7');
  expect(rmExt('foo/bar')).toStrictEqual('foo/bar');
  expect(rmExt('.txt')).toStrictEqual('.txt');
});
