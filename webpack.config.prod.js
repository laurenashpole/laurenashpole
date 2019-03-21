let webpack = require('webpack');
let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  target: 'web',
  entry: {
    main: './source/js/main/index.js',
    admin: './source/js/admin/index.js'
  },
  output: {
    filename: 'js/[name].[chunkhash].js',
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
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new CleanWebpackPlugin(['css', 'js'], {
      root: path.resolve(__dirname, 'public'),
      exclude: ['fonts']
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ManifestPlugin({
      fileName: 'assets.json',
      publicPath: '/'
    }),
    new UglifyJsPlugin({
      test: /\.jsx$/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};