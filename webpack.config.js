const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/main.js',
    output: {
        path: production ? path.resolve(__dirname, 'dist') : '/',
        publicPath: '/',
        filename: 'build.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: production ? ExtractTextPlugin.extract({
                            use: 'css-loader!sass-loader',
                            fallback: 'vue-style-loader'
                        }) : 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        host: '192.168.0.14'
    },
    performance: {
        hints: false
    },
    devtool: production ? false : '#eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Vue App',
            minify: {
                removeScriptTypeAttributes: true
            }
            //favicon: 'src/images/favicon.ico',
        })
    ]
}

if (production) {    
    module.exports.plugins = module.exports.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('styles.css'),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        })
    ]);
}
