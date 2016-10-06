var path = require('path');
var context = path.resolve(__dirname);

module.exports = {
  entry: {
    index: './src/index.js'
  },
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    library: 'smart-form',
    filename: '[name].bundle.js',
    path: path.join(context, 'bundles')
  },
  externals: /^[a-z]+/,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(context, './src')
      }
    ]
  }
};