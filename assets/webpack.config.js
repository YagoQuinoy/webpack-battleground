const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/index.jsx"),
  output: {
    path: path.resolve(__dirname, "../public"),
    filename: "[name].[contenthash].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(), new ManifestPlugin()],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../public"),
    port: 9000
  }
};
