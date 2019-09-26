const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'production',
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['css/*', 'js/*']
    }),
    new ManifestPlugin({
      fileName: 'assets.json',
      publicPath: '/'
    })
  ]
};