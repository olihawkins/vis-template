/* eslint-env node */
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.min.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: {
                    test: /node_modules\/(?!(whatwg-fetch|d3|d3-.*)\/).*/
                },
                options: {
                    presets: ["@babel/preset-env"],
                    plugins: [["@babel/plugin-transform-runtime", {
                        corejs: 3,
                        helpers: false,
                        regenerator: true}]]
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    mode: "development",
    devtool: "source-map",
    devServer: { contentBase: "./dist" },
    watch: true
};
