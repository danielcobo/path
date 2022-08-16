/**
 * Remove file extension
 * @public
 * @param {string} path
 * @returns {string}
 */
module.exports = function rmExt(path) {
  let i = path.lastIndexOf('.');
  if (i < 1) {
    i = path.length;
  }
  return path.slice(0, i);
};
