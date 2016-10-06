var path = require('path');
var webpack = require('webpack');
var context = path.resolve(__dirname);
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');


module.exports = {
  entry: {
    index: './src/index.js',
    'react-hot-loader': 'react-hot-loader/patch'
  },
  devtool: 'source-map',
  output: {
    path: path.join(context, 'bundles'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  resolve: {
    fallback: path.join(__dirname, "node_modules")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(context, 'src')
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    historyApiFallback: true,
    inline: true,
    noInfo: true,
    outputPath: path.join(context, 'bundles'),
    quiet: true,
    watchOptions: { poll: 1000, ignored: /node_modules/ },
    stats: false
  }
};