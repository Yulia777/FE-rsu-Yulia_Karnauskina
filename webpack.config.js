'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var root = path.resolve(__dirname, 'src');
var pages = path.resolve(__dirname, 'src/pages');

module.exports = {

    entry: { //отсюда берёт

        blog: path.resolve(root, 'app.js'),
        style: path.resolve(root, 'css/style.css'),
        1: path.resolve(root, '1.png'),
        3: path.resolve(root, '3.jpg'),
        pic1: path.resolve(root, 'pic1.png'),
        pic2: path.resolve(root, 'pic2.png')
    },

    output: { //сюда кладёт
        publicPath: '/',
        path: './public',
        filename: '[name].js'
    },

    module: {
        loaders: [
            {
                test: /\.html/,
                loader: 'raw'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png)|(jpg)$/,
                loader: 'file?name=[name].[ext]'
            }
        ]
    },

    watch: true,

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(root, 'index.html')
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: path.resolve(pages, 'main.html')
        }),
        new ExtractTextPlugin("style.css", {allChunk:true})
    ]
};