const isFile = require('./isFile.js');
test('isFile()', function () {
  expect(isFile('./hello/world.txt')).toStrictEqual(true);
  expect(isFile('hello/world/foo.txt')).toStrictEqual(true);
  expect(isFile('hello/world')).toStrictEqual(false);
  expect(isFile('hello/world/.foo')).toStrictEqual(true);
  expect(isFile('./foo.txt')).toStrictEqual(true);
  expect(isFile('foo.txt')).toStrictEqual(true);
  expect(isFile('.dotfile')).toStrictEqual(true);
  expect(isFile('./')).toStrictEqual(false);
  expect(isFile('.')).toStrictEqual(false);
  expect(isFile('')).toStrictEqual(false);
});
