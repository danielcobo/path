const dotfile = require('./dotfile.js');
const path = require('path');

test('dotfile()', function () {
  expect(dotfile('foo.txt')).toStrictEqual('');
  expect(dotfile('.' + path.sep + 'foo' + path.sep + 'bar')).toStrictEqual('');
  expect(dotfile('.' + path.sep + 'foo.txt')).toStrictEqual('');
  expect(
    dotfile('foo' + path.sep + '.bar' + path.sep + 'hello.txt')
  ).toStrictEqual(''); //'dotfolder'
  expect(dotfile('foo' + path.sep + 'bar.ver7.txt')).toStrictEqual('');
  expect(dotfile('foo' + path.sep + '.bar')).toStrictEqual('.bar');
  expect(dotfile('.txt')).toStrictEqual('.txt');
  expect(dotfile('.foo.txt')).toStrictEqual('.foo.txt');
  expect(dotfile('foo' + path.sep + '.bar.txt')).toStrictEqual('.bar.txt');
  expect(dotfile('.' + path.sep + '')).toStrictEqual('');
  expect(dotfile('.')).toStrictEqual('');
  expect(dotfile('')).toStrictEqual('');
});
