const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './assets/js/script.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    }, 
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          }),
          new BundleAnalyzerPlugin({
              analyzerMode: "static", // the report will output to an html in dist
          })
    ],
    mode: 'development'
};