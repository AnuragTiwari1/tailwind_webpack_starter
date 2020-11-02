const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development", // this will trigger some webpack default stuffs for dev
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
});
