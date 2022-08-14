const path = require('path');

/**
 * Get filename from path (incl. extension)
 * @param {string} str - path
 * @returns {string} filename
 */
module.exports = function file(str) {
  const filename = path.basename(str);

  if (filename.indexOf('.') > -1 && str.slice(-1) !== path.sep) {
    return filename;
  } else {
    return '';
  }
};
