const merge = require("webpack-merge");
const common = require("./webpack.common");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: {
          safe: true,
          discardComments: {
            removeAll: true,
          },
        },
      }),
      new TerserPlugin(),
    ],
  },
});
