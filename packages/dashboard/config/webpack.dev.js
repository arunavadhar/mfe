const { merge } = require('webpack-merge');
const HtmlWebpackplugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8083,
        historyApiFallback: {
            index: '/index.html'
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    output: {
        publicPath: 'http://localhost:8083/'
    },
    plugins: [
        new HtmlWebpackplugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'dashboard',
            filename: 'remoteEntry.js',
            exposes: {
                './DashboardLoader': './src/bootstrap'
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(commonConfig, devConfig);