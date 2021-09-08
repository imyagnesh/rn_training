const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './index.js',
    output: {
      path: path.resolve(__dirname, 'bundle'),
      filename: 'index.js',
    },
    mode:"development",
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: "babel-loader"
          }
        ]
      },
      plugins: [new HtmlWebpackPlugin({
          template:"./public/index.html",
          filename:"index.html"
      })]
  };