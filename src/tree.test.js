const tree = require('./tree.js');

test('tree()', function () {
  expect(tree('./hello/world.txt')).toStrictEqual('./hello');
  expect(tree('hello/world/foo.txt')).toStrictEqual('hello/world');
  expect(tree('hello/world')).toStrictEqual('hello/world'); //--
  expect(tree('hello/world/')).toStrictEqual('hello/world/'); //--- Should make trailing slash uniform?
  expect(tree('hello/world/.foo')).toStrictEqual('hello/world'); //--
  expect(tree('./foo.txt')).toStrictEqual('.');
  expect(tree('foo.txt')).toStrictEqual('');
  expect(tree('./foo.bar.txt')).toStrictEqual('.');
  expect(tree('.dotfile')).toStrictEqual('');
  expect(tree('.dotfile.txt')).toStrictEqual('');
  expect(tree('./.dotfile.txt')).toStrictEqual('.');
  expect(tree('./.dotfile.bar.txt')).toStrictEqual('.');
  expect(tree('foo/.bar/hello')).toStrictEqual('foo/.bar/hello', 'dotfolder');
  expect(tree('')).toStrictEqual('');
});
