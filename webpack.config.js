const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PostcssAmplifyWebpackPlugin = require('postcss-amplify-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['css/*', 'js/*']
    }),
    new PostcssAmplifyWebpackPlugin({
      outputPath: path.resolve(__dirname, '../app/views/amp/includes'),
      excludedFiles: [/admin.*\.css/, /blog.*\.css/],
      excludedBlocks: 'fonts__'
    }),
    new ManifestPlugin({
      fileName: 'assets.json',
      publicPath: '/'
    })
  ]
};