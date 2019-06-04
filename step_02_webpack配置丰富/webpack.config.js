const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');// html 模版插件
const yargsParser = require('yargs-parser') //yargs-parser 模块用来获取命令行参数

const argv = yargsParser(process.argv.slice(2));   // cross-env：运行跨平台设置和使用环境变量的脚本
// console.log(argv)  //{ _: [], open: true, mode: 'development' }
const pro = argv.mode == 'production' ? true : false;  //  区别是生产环境和开发环境


let config = {
    entry: {
        index: './src/index.js',    // 入口文件
    },
    output: {
        filename: pro ? '[name].[chunkhash].js' : '[name].js', // 打包后的文件名称
        path: path.resolve('dist'), // 打包后的目录，必须是绝对路径
        publicPath: '/', // 打包的根目录下
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {},
                    },
                ],
            },
            {    // babel es6转 es5
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, { // eslint 检查
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true // 会在打包好的bundle.js后面加上hash串
        }),
    ],
    resolve: {
        alias: {
            'src': path.join(__dirname, './src'),
        },
        extensions: ['.js', '.css', '.json', '.less', '.scss']
    },
    devServer: {
        port: 8088,             // 端口
        open: true,             // 自动打开浏览器
        hot: true,               // 开启热更新
        overlay: true, // 浏览器页面上显示错误
        historyApiFallback: true
    },
    //srouce里面能看到我们写的代码，也能打断点调试代码
    devtool: pro ? '' : 'inline-source-map'
}

module.exports = config