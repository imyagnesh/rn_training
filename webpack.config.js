const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    mode: "development",
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }

    )],
    devServer: {
        port: 8080,
        open: true
    }
}