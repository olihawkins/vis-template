import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";

// Disable circular dependency warnings from D3
// https://github.com/d3/d3-selection/issues/168
const disableCircularDependencyWarnings = function (warning, warn) {
    if (warning.code === "CIRCULAR_DEPENDENCY") return;
    warn(warning);
};

export default [
    {
        input: "src/index.js",
        output: {
            file: "dist/index.min.js",
            format: "iife",
            sourcemap: true,
            sourcemapFile: "dist/index.min.js.map"
        },
        plugins: [
            babel({
                babelHelpers: "runtime",
                exclude: /node_modules\/(?!(whatwg-fetch|d3|d3-.*)\/).*/,
                presets: [["@babel/preset-env"]],
                plugins: [["@babel/plugin-transform-runtime", {
                    corejs: 3,
                    helpers: true,
                    regenerator: true}]]
            }),
            resolve(),
            commonjs(),
            terser(),
            serve("dist")
        ],
        onwarn: disableCircularDependencyWarnings
    }
];
