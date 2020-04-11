const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module:{
        rules:[
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'] // 从右向左解析
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
        ]
    },
    devServer: {
        contentBase:['../'],
        port: 8088, // 端口
        open: true, // 自动打开浏览器
        hot: true, // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true // 默认加载index.html
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
})
