const lvls = require('./lvls.js');

test('lvls()', function () {
  //<--- won't handle relative lvls, like ./ or ../ --> use path.resolve?

  const paths = ['hello', 'foo/bar', 'hello/world', 'hello/world/tidy/'];
  const depth = lvls(paths);

  expect(depth[0]).toStrictEqual(['hello']);
  expect(depth[1]).toStrictEqual(['foo/bar', 'hello/world']);
  expect(depth[2]).toStrictEqual(['hello/world/tidy/']);
});
