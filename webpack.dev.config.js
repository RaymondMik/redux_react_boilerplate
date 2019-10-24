const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    resolve: { extensions: [".ts", ".tsx", ".js", ".jsx"] },
    mode: 'development',
    devtool: 'source-map',
    entry: [
      'babel-polyfill', 'react-hot-loader/patch', './src/index.tsx'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    devServer: {
      contentBase: './dist',
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader', 'postcss-loader' ]
        },
        {
          test: /\.(scss|sass)$/,
          use: [
            {loader: 'style-loader', options: {sourceMap: true}},
            {loader: 'css-loader', options: {sourceMap: true}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}
          ]
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: [ 'source-map-loader' ]
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [ 'ts-loader' ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {loader: 'file-loader'}
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {loader: 'file-loader'}
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'My Redux/React App',
        filename: 'index.html',
        template: 'src/index.html'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new BrowserSyncPlugin(
        // BrowserSync options
        {
          // browse to http://localhost:3000/ during development
          host: 'localhost',
          port: 3000,
          // proxy the Webpack Dev Server endpoint
          // (which should be serving on http://localhost:3100/)
          // through BrowserSync
          proxy: 'http://localhost:8080/'
        },
        // plugin options
        {
          // prevent BrowserSync from reloading the page
          // and let Webpack Dev Server take care of this
          reload: false
        }
      )
    ]
};