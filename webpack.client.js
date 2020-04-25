const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
    //root file of our server application
    entry: './src/client/Clients.js',

    //out put tell webpack where to put the out put file that is genereted
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

}

module.exports = merge(baseConfig, config);