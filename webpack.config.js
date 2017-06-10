var HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      entry: ['./src/app.js'],
      output: {
        path: 'build',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            minify: {
                collapseWhitespace: true
            },
            template: './src/index.html'
        })
    ]
};