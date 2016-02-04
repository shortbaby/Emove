/**
 * @fileOverview webpack配置文件
 * @author xuguanlong
 */

'use strcit';
var path = require('path');
// 不用webpack处理的文件
exports.forbid = [

];

exports.option = {
    entry: {
        Emove: './src/Emove'
    },
    // 输出
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
