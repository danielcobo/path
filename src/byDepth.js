const rmTrailing = require('@danielcobo/rmTrailing');

/**
 * Get paths by depth (number of path separators). Shallow to deepest.
 * Will also sort by name, but lexicographically (numbers should be left padded by zero)
 * @public
 * @param {Array<string>} paths
 * @returns {Array<string>} paths by depth
 */
module.exports = function pathByDepth(paths) {
  return paths.slice().sort(function (a, b) {
    const separator = require('path').sep;
    a = rmTrailing(a, separator);
    b = rmTrailing(b, separator);
    let rgx = /\\/g;
    if (separator !== '\\') {
      rgx = RegExp(separator, 'g');
    }
    const x = (a.match(rgx) || []).length;
    const y = (b.match(rgx) || []).length;
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    } else {
      //return 0;

      //Sort by name (numbers should be left-padded by 0)
      const arr = [a, b];
      arr.sort();
      if (arr[0] === a) {
        return -1;
      } else {
        return 1;
      }
      //Note: Can't return 0 because a !== b (would be file name conflict)
    }
  });
};
