# Visualisation template

This is a simple template and workflow for developing interactive data visualisations with modern JavaScript using Node.js, Babel, webpack and D3. The aim is to be able to use the latest features of JavaScript, while generating code that works across a wide range of browsers. You will need to have [Node.js](https://nodejs.org/) installed.

To use this template, follow the setup instructions below. Once you have set up the workflow you can edit `src/index.js` and `dist/index.html` to develop your visualisation.

## Setup

1\. Clone this repository.

```sh
git clone https://github.com/olihawkins/vis-template
```

2\. Rename the folder to your project name.

```sh
mv vis-template your-project-name
```

3\. Change into the project directory.

```sh
cd your-project-name
```

4\. Remove the git files.

```sh
rm -rf .git .gitignore LICENSE
```

5\. Initialise the project folder with `npm` to create the `package.json`.

```sh
npm init
```

6\. Install the development dependencies.

```sh
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime-corejs3 webpack webpack-cli http-server eslint
```

7\. Install the package dependencies.

```sh
npm install --save @babel/runtime whatwg-fetch d3
```

8\. Open `package.json` and add the following entries to `scripts` (above the entry for `test`).

```json
"webpack": "webpack",
"start": "http-server -a localhost -p 8000 -c-1",
```

9\. Start webpack to build the bundle.

```sh
npm run webpack
```

10\. Start the http server on http://localhost:8000 and navigate to the `dist` directory to view the output.

```sh
npm start
```

11\. Create `.eslintrc` for the project if you use linting in your text editor (optional).

```sh
./node_modules/.bin/eslint --init
```

## Development

The `src` directory contains the input JavaScript source file `index.js`, while the `dist` directory contains the `index.html` webpage. Webpack transpiles and bundles `src/index.js` as `dist/index.min.js`, including any modules `index.js` imports.

To keep build times short during development, `dist/index.html` is initially configured to load D3 from the web.

```html
<!-- Load D3 from web for development: REMOVE for production -->
<script src="https://d3js.org/d3.v5.min.js"></script>
```

Correspondingly, the import statements needed to include D3 in the webpack bundle are commented out in `src/index.js`. Note that D3 needs the whatwg-fetch polyfill for its data loading functions to work in older browsers (all other polyfills are handled automatically by Babel and core-js).

```javascript
// D3 imports commented out for development: UNCOMMENT for production
// import "whatwg-fetch";
// import * as d3 from "d3";
```

To generate the final production bundle, this development configuration needs to be reversed:

- Remove the script tag that loads D3 from the web in `dist/index.html`
- Uncomment the import statements that include D3 and whatwg-fetch in `src/index.js`

In its initial state, `index.js` contains some example code, which checks that webpack, Babel and D3 are working correctly. Replace this with your visualisation code.

## Technologies

This is a simple setup. You can configure webpack further to do a lot more than this. More information on the technologies used for this workflow can be found in the documentation.

- [Node.js](https://nodejs.org/)
- [webpack](https://webpack.js.org/guides/getting-started/)
- [core-js](https://github.com/zloirock/core-js)
- [whatwg-fetch](https://github.com/github/fetch)
- [D3](https://d3js.org)
- [ESLint](https://eslint.org)

## Using D3

- [Thinking with joins](https://bost.ocks.org/mike/join/) - Mike Bostock's original article on the D3 update pattern
- [selecton.join](https://observablehq.com/@d3/selection-join) - Mike Bostock's notebook on the new D3 update pattern
- [Enter and exit](https://www.d3indepth.com/enterexit/) - Step-by-step walkthrough of the D3 update pattern
