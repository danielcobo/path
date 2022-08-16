const path = require('path');
const dotfile = require('./dotfile.js');
const file = require('./file.js');

/**
 * Returns tree part of path
 * @param {string} str - path
 * @returns {string} - tree
 */
module.exports = function tree(str) {
  if (str === '') {
    return str;
  } else if (!file(str)) {
    return str;
  } else {
    const dirname = path.dirname(str);
    if (dirname === '.') {
      if (str[0] !== '.' || str === dotfile(str)) {
        return '';
      }
    }
    return dirname;
  }
};
