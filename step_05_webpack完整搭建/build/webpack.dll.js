const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports={
    mode:'none',
    entry:{
        vendor:['react','react-dom','jquery','lodash','mobx','react-router']
    },
    output: {
        path: path.resolve(__dirname,'../dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            context:path.join(__dirname, '../'),
            path:path.resolve(__dirname,'../dll','[name]-manifest.json'),
            name: '[name]_library'
        }),
        
    ]
}