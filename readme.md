# Visualisation template

This repository is a simple template and workflow for developing interactive data visualisations with modern JavaScript using Node.js, Babel, rollup and D3. The aim is to be able to use the latest features of JavaScript, while generating code that works across a wide range of browsers. You will need to have [Node.js](https://nodejs.org/) installed.

## D3 support

The template now supports D3 version 7. As D3 has fully adopted ES2015, D3 modules in the `node_modules` folder are now transpiled along with your own source code when you build the production bundle. If you are using D3 version 5 or earlier and don't need to transpile D3, you should change the regular expression that is used as the exclusion rule for babel-loader on line 26 of `rollup.config.js` to the following:

```javascript
/node_modules\/(?!(?!(whatwg-fetch)\/).*/
```

## Quick setup

The easiest way of using the template is to clone this repository into a new project directory and install the required modules using the pre-defined `package.json`.

1\. Clone the repository into a project directory.

```sh
git clone https://github.com/olihawkins/vis-template my-project
```

2\. Change into the project directory.

```sh
cd my-project
```

3\. Remove the git files.

```sh
rm -rf .git .gitignore LICENSE readme.md
```

4\. Install from `package.json`.

```sh
npm install
```

## Manual setup

An alternative method involves manually downloading the latest versions of the packages. This may be useful if you want to upgrade to newer versions of the packages, or customise the setup in other ways.

1\. Clone the repository into a project directory.

```sh
git clone https://github.com/olihawkins/vis-template my-project
```

2\. Change into the project directory.

```sh
cd my-project
```

4\. Remove the git files and the existing `package.json` files.

```sh
rm -rf .git .gitignore LICENSE readme.md package.json package-lock.json
```

5\. Initialise the project folder with `npm` to create a new `package.json`.

```sh
npm init
```

6\. Install the development dependencies.

```sh
npm install --save-dev @babel/core @babel/plugin-transform-runtime @babel/preset-env rollup @rollup/plugin-babel rollup-plugin-terser @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-serve eslint
```

7\. Install the package dependencies.

```sh
npm install --save @babel/runtime @babel/runtime-corejs3 whatwg-fetch d3
```

8\. Open `package.json` and add the following entries to `scripts` (above the entry for `test`).

```json
"build": "rollup -c --watch",
```

## Development

The `src` directory contains the input JavaScript source file `index.js`, while the `dist` directory contains the `index.html` webpage. Once you have set up the workflow you can edit `src/index.js` and `dist/index.html` to develop your visualisation.

To begin development, start rollup and navigate to [localhost:10001](http://localhost:10001) in your browser.

```sh
npm run build
```

Rollup transpiles and bundles `src/index.js` as `dist/index.min.js`, including any modules `index.js` imports.

In its initial state, `index.js` contains some example code, which checks that rollup, Babel and D3 are working correctly. Replace this with your visualisation code.

Note that D3 needs the `whatwg-fetch` polyfill for `d3-fetch` functions to work in older browsers. All other polyfills are handled automatically by Babel and core-js.

You can optionally create a `.eslintrc` for the project if you use linting in your text editor.

```sh
./node_modules/.bin/eslint --init
```

## Technologies

This is a simple setup. You can configure rollup to do a lot more than this. More information on the technologies used for this workflow can be found in the documentation.

- [Node.js](https://nodejs.org/)
- [rollup](https://rollupjs.org/)
- [core-js](https://github.com/zloirock/core-js)
- [whatwg-fetch](https://github.com/github/fetch)
- [D3](https://d3js.org)
- [ESLint](https://eslint.org)
