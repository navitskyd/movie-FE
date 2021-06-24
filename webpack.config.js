const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const htmlPlugin = new HtmlWebpackPlugin({template: APP_DIR + '/index.html'});
const providePlugin = new webpack.ProvidePlugin({
    _: "lodash"
});
const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].css'
});

module.exports =
    {
    // the app entry point is /src/index.tsx
    entry: APP_DIR + '/index.tsx',
    output: {
        // the output of the webpack build will be in /dist directory
        path: BUILD_DIR,
        // the filename of the JS bundle will be bundle.js
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [APP_DIR, 'node_modules'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less']
    },
    module: {
        rules: [
            {
                // for any file with a suffix of js or jsx
                test: /\.jsx?$/,
                // ignore transpiling JavaScript from node_modules as it should be that state
                exclude: /node_modules/,
                // use the babel-loader for transpiling JavaScript to a suitable format
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,  "css-loader"]
            }, {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true
                }
            }, {
                test: /\.(ttf|eot|svg|woff|png|jpg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        htmlPlugin,new CheckerPlugin(),
        providePlugin, miniCssPlugin]
}
