const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');
const config = {
    //we are building a bundle for node js rather than a browser
    target: 'node',

    //root file of our server application
    entry: './src/index.js',

    //out put tell webpack where to put the out put file that is genereted
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);