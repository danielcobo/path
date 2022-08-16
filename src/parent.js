const path = require('path');
const tree = require('./tree.js');
const rmTrailing = require('@danielcobo/rmTrailing');

/**
 * Get parent folder
 * @public
 * @param {string} str - path
 * @returns {string} - parent folder
 */
module.exports = function parent(str) {
  return tree(rmTrailing(str, path.sep) + '.dummyExt');
};
