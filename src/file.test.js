const file = require('./file.js');
const path = require('path');

test('file()', function () {
  expect(file('foo.txt')).toStrictEqual('foo.txt');
  expect(file('.' + path.sep + 'foo.txt')).toStrictEqual('foo.txt');
  expect(file('foo.ver100.txt')).toStrictEqual('foo.ver100.txt');
  expect(file('foo' + path.sep + 'bar.txt')).toStrictEqual('bar.txt');
  expect(
    file('foo' + path.sep + '.bar' + path.sep + 'hello.txt')
  ).toStrictEqual('hello.txt'); //dotfolder
  expect(file('.bar' + path.sep + '')).toStrictEqual(''); //dotfolder
  expect(file('foo' + path.sep + '.bar' + path.sep + 'hello')).toStrictEqual(
    ''
  ); //dotfolder
  expect(file('.dotfile')).toStrictEqual('.dotfile');
  expect(file('foo' + path.sep + '.dotfile')).toStrictEqual('.dotfile');
  expect(file('foo' + path.sep + 'bar')).toStrictEqual('');
  expect(file('')).toStrictEqual('');
});
