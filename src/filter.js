const pathExt = require('./ext.js');

/**
 * Filter by file extension/s or function
 * @public
 * @param {string|Array<string>} paths
 * @param {string|Array<string>|function} filters
 * @param {boolean} [whitelist=true] - true/false for whitelist/blacklist
 * @returns {Array<string>} filtered paths
 */
module.exports = function filter(paths, filters, whitelist) {
  if (!Array.isArray(paths)) {
    paths = [paths];
  }
  let match = filters;
  if (typeof filters !== 'function') {
    if (!Array.isArray(filters)) {
      filters = [filters];
    }
    match = function (path) {
      return (
        0 <
        filters.filter(function (ext) {
          return path.slice(-ext.length) === ext;
        }).length
      );
    };
  }

  return paths.filter(function (path) {
    if (whitelist !== false) {
      return match(path);
    } else {
      return !match(path);
    }
  });
};
