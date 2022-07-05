const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader:'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
           loader: 'style-loader',
           test: /\.s?css$/ 
        }, {
            loader: 'css-loader',
            test: /\.s?css$/  
        }, {
            loader: 'sass-loader',
           test: /\.s?css$/ 
        }]
    },
    devServer: {
        static: path.join(__dirname, 'public')
    }
}