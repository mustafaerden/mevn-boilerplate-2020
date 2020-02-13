require("dotenv").config();
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniExtracCssPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["webpack-hot-middleware/client?reload=true", "./client/index.js"],
  output: {
    filename: "app.js",
    publicPath: "/",
    path: path.resolve(__dirname, "server/public")
  },
  // vue ayarları (npm i --save-dev vue-loader babel-loader)
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniExtracCssPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new MiniExtracCssPlugin({
      filename: "app.css"
    })
  ]
};
