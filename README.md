# path

Extend native nodeJS path module

## 🧭 Table of contents

- [✨ Benefits](#-benefits)
- [🎒 Requierments](#-requierments)
- [🚀 Quickstart](#-quickstart)
- [📘 Documentation](#-documentation)
- [🆘 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [🧪 Testing](#-testing)
- [⚖️ License](#️-license)

## ✨ Benefits

- [x] Extends native path module
- [x] Normalizes naming

## 🎒 Requierments

To use this package you will need:

- [NodeJS](https://nodejs.org/en/)

## 🚀 Quickstart

### Install

#### NodeJS

Install using the terminal:

```cli
npm install @danielcobo/path
```

Require the module:

```js
const path = require('@danielcobo/path');
```

<sub>**Note:** In case you're wondering, **@danielcobo/** is just a [namespace scope](https://docs.npmjs.com/about-scopes/) - an NPM feature. Scopes make it easier to name modules and improve [security](https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/).</sub>

#### Browser

Declare it as a global variable named path by including this script before any script you want to use it in:

```html
<script src="https://cdn.jsdelivr.net/npm/@danielcobo/path@1/dist/iife/path.min.js"></script>
```

Or import it as an [ECMAScript module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import):

```js
import * as path from 'https://cdn.jsdelivr.net/npm/@danielcobo/path@1/dist/esm/path.min.js';
```

Also, feel free to download the file if you prefer not to use [jsdelivr](https://www.jsdelivr.com). In that case just replace the url with the relative file path.

### Example use

```js
path.byDepth('have', 'have/a/nice/day', 'have/a/sundae'); //['have','have/a/sundae','have/a/nice/day']
path.dotfile("dir/.git"); //'.git'
path.ext('./ext.js'); //'.js'
path.file('./file.js'); //'file.js'
path.filename('./file.js'); //'file.js'
path.filter(['./hello.txt', './file.js'], '.txt'); //['./hello.txt']
path.isFile('./someFile.js'); //true
path.lvls(['hello', 'foo/bar', 'hello/world', 'hello/world/tidy/']);
/*
[
['hello'],
['foo/bar', 'hello/world'],
['hello/world/tidy/']
]
*/
path.parent('vanilla/chocolate/mint'); //'vanilla/chocolate'
path.rmExt('whatisthis.js'); //'.js'
path.separator = path.sep; //'/' or '\' on Win
path.tree('vanilla/chocolate/mint'); //'vanilla/chocolate/mint'
```

For details see documentation below.

## 📘 Documentation
### .rmExt()
Remove file extension

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| path | `string` |  |  |

#### Returns
| Type | Description |
| ---- | ----------- |
| `string` |  |

<sub>**Source:** [src/rmExt.js:1](https://github.com/danielcobo/path/blob/master/src/rmExt.js?plain=1#L1)</sub>
### .parent()
Get parent folder

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | `string` |  | Path |

#### Returns
| Type | Description |
| ---- | ----------- |
| `string` | Parent folder |

<sub>**Source:** [src/parent.js:5](https://github.com/danielcobo/path/blob/master/src/parent.js?plain=1#L5)</sub>
### .lvls()
Sorts paths by depth

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| paths | `Array<string>` |  |  |

#### Returns
| Type | Description |
| ---- | ----------- |
| `Array<Array>` |  |

<sub>**Source:** [src/lvls.js:3](https://github.com/danielcobo/path/blob/master/src/lvls.js?plain=1#L3)</sub>
### .isFile()
True/false if path is a file

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| path | `string` |  |  |

#### Returns
| Type | Description |
| ---- | ----------- |
| `boolean` |  |

<sub>**Source:** [src/isFile.js:4](https://github.com/danielcobo/path/blob/master/src/isFile.js?plain=1#L4)</sub>
### .filter()
Filter by file extension/s or function

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| paths | `string`|`Array<string>` |  |  |
| filters | `string`|`Array<string>`|`function` |  |  |
| [whitelist] | `boolean` | true | True/false for whitelist/blacklist |

#### Returns
| Type | Description |
| ---- | ----------- |
| `Array<string>` | Paths |

<sub>**Source:** [src/filter.js:3](https://github.com/danielcobo/path/blob/master/src/filter.js?plain=1#L3)</sub>
### .file()
Get filename from path (incl. extension)

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | `string` |  | Path |

#### Returns
| Type | Description |
| ---- | ----------- |
| `string` |  |

<sub>**Source:** [src/file.js:3](https://github.com/danielcobo/path/blob/master/src/file.js?plain=1#L3)</sub>
### .path.extname()
Synonym for native path.extname. See https://nodejs.org/api/path.html#pathextnamepath

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |

<sub>**Source:** [src/ext.js:3](https://github.com/danielcobo/path/blob/master/src/ext.js?plain=1#L3)</sub>
### .dotfile()
Get dotfile in path

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| str | `string` |  | Path |

#### Returns
| Type | Description |
| ---- | ----------- |
| `string` | In path |

<sub>**Source:** [src/dotfile.js:3](https://github.com/danielcobo/path/blob/master/src/dotfile.js?plain=1#L3)</sub>
### .byDepth()
Get paths by depth (number of path separators). Shallow to deepest. Will also sort by name, but lexicographically (numbers should be left padded by zero)

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| paths | `Array<string>` |  |  |

#### Returns
| Type | Description |
| ---- | ----------- |
| `Array<string>` | By depth |

<sub>**Source:** [src/byDepth.js:3](https://github.com/danielcobo/path/blob/master/src/byDepth.js?plain=1#L3)</sub>

## 🆘 Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/path/issues).

## 🤝 Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts 😉)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#️-license) as this repository.

## 🧪 Testing

**Testing suite:** [🃏 Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [👽 Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutation`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## ⚖️ License

[MIT License](https://github.com/danielcobo/path/blob/master/LICENSE.md)