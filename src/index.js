const path = require('path');

path.byDepth = require('./byDepth.js');
path.dotfile = require('./dotfile.js');
path.ext = require('./ext.js');
path.file = require('./file.js');
path.filename = path.file;
path.filter = require('./filter.js');
path.isFile = require('./isFile.js');
path.lvls = require('./lvls.js');
path.parent = require('./parent.js');
path.rmExt = require('./rmExt.js');
path.separator = path.sep;
path.tree = require('./tree.js');

/**
 * @module
 */
module.exports = path;
