const path = require('path');
const tree = require('./tree.js');
const rmTrailing = require('@danielcobo/rmTrailing');

module.exports = function parent(str) {
  return tree(rmTrailing(str, path.sep) + '.dummyExt');
};
