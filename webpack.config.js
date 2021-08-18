const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool:'source-map',

  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './public'),
    compress: true,
    open: true,
    hot: true,
    port: 9000
  },
};