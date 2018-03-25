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
    main: [
      './assets/js/main/index.js',
      './assets/sass/main.scss'
    ],
    admin: [
      './assets/js/admin/index.js',
      './assets/sass/admin.scss'
    ],
    blog: [
      './assets/sass/blog.scss'
    ]
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