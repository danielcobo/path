const ext = require('./ext.js');
const dotfile = require('./dotfile.js');

/**
 * True/false if path is a file
 * @public
 * @param {string} path
 * @returns {boolean}
 */
module.exports = function isFile(path) {
  if (typeof path !== 'string') {
    throw new Error('Paramter path should be a string');
  }

  if (ext(path) || dotfile(path)) {
    return true;
  } else {
    return false;
  }
};
