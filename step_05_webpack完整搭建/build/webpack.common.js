const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        alias: {
            src: path.join(__dirname, '../src')
        },
        extensions: ['.js', '.css', '.less', '.scss'],
        modules: [path.resolve(__dirname, '../node_modules')], // 减少模块的搜索范围
        mainFields: ['main'] //减少入口文件的搜索步骤
    },
    module: {
        noParse: /jquery|lodash/, // 忽略大型的 library 可以提高构建性能。
        rules: [
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                include: path.resolve(__dirname, '../src/**/*.js')
            }
        ]
    },
    plugins: [
        new HappyPack({
            id:'babel',
            loaders:['babel-loader?cacheDirectory']
        }),
        new HtmlWebpackPlugin({
            inject: true, // will inject the main bundle to index.html
            template: path.resolve(__dirname, '../index.html'),
            hash: true // 会在打包好的bundle.js后面加上hash串
        }),
        new AutoDllPlugin({
            inject: true, // will inject the DLL bundle to index.html
            debug: true,
            filename: '[name]_dll.js',
            path:  './dll',  // 相对html 的路径
            entry: {
                vendor: ['react', 'react-dom']
            }
        })
    ]
}
