const parent = require('./parent.js');

test('parent()', function () {
  expect(parent('./hello/world.txt')).toStrictEqual('./hello');
  expect(parent('hello/world/foo.txt')).toStrictEqual('hello/world');
  expect(parent('hello/world')).toStrictEqual('hello'); //--
  expect(parent('hello/world/')).toStrictEqual('hello'); //--- Should make trailing slash uniform?
  expect(parent('hello/world/.foo')).toStrictEqual('hello/world'); //--
  expect(parent('./foo.txt')).toStrictEqual('.');
  expect(parent('foo.txt')).toStrictEqual('');
  expect(parent('./foo.bar.txt')).toStrictEqual('.');
  expect(parent('.dotfile')).toStrictEqual('');
  expect(parent('.dotfile.txt')).toStrictEqual('');
  expect(parent('./.dotfile.txt')).toStrictEqual('.');
  expect(parent('./.dotfile.bar.txt')).toStrictEqual('.');
  expect(parent('foo/.bar/hello')).toStrictEqual('foo/.bar'); //dotfolder;
  expect(parent('')).toStrictEqual('');
});
