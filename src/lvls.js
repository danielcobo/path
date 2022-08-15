const rmTrailing = require('@danielcobo/rmtrailing');

module.exports = function lvls(paths) {
  const separatorStr = require('path').sep;
  const separator = RegExp(separatorStr, 'g');

  const depths = [];
  paths.map(function (path) {
    const cleanPath = rmTrailing(path, separatorStr);
    const depth = (cleanPath.match(separator) || []).length;

    if (!depths[depth]) {
      depths[depth] = [];
    }
    depths[depth].push(path);
  });

  if (!depths[0]) {
    depths[0] = [];
  }

  return depths;
};
