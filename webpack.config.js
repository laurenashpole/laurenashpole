let webpack = require('webpack');
let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: {
    main: './source/js/main/index.js',
    admin: './source/js/admin/index.js',
    blog: './source/js/blog/index.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'source/js/admin'),
          path.resolve(__dirname, 'source/js/components')
        ],
        loader: 'eslint-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new CleanWebpackPlugin(['css', 'js'], {
      root: path.resolve(__dirname, 'public'),
      exclude: ['fonts']
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: false
    }),
    new ManifestPlugin({
      fileName: 'assets.json',
      publicPath: '/'
    })
  ]
};