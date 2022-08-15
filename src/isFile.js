const ext = require('./ext.js');
const dotfile = require('./dotfile.js');

module.exports = function isFile(str) {
  if (typeof str !== 'string') {
    throw new Error('Paramter str should be a string');
  }

  if (ext(str) || dotfile(str)) {
    return true;
  } else {
    return false;
  }
};
