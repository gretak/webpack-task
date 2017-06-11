var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

    module.exports = {
      entry: ['./src/app.js'],
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader", "sass-loader"],
                  publicPath: "/build"
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ],
     devServer: {
        host: "localhost",
        port: 5000,
        inline: true
     }
};