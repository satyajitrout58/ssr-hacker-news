module.exports = {
    //tell webpack to run bable on every file it runs through
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {target: {browser: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}