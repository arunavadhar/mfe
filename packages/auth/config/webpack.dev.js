const { merge } = require('webpack-merge');
const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        }
    },
    output: {
        publicPath: 'http://localhost:8082/'
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthLoader': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);