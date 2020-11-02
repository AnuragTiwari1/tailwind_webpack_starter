const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js", // [name] will take whatever the input filename is. defaults to 'main' if only a single entry value
    path: path.resolve(__dirname, "dist"), // the folder containing you final dist/build files. Default to './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ], // automatically creates a 'index.html' for us with our <link>, <style>, <script> tags inserted! Visit https://github.com/jantimon/html-webpack-plugin for more options
};
