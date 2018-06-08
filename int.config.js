const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    int: './int/src/js/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Managemente'
    })
  ],
  output: {
    path: path.resolve(__dirname + '/int', 'dist'),
    filename: './[name].bundle.js'
  }
};
