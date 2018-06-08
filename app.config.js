const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    int: './int/src/js/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hepic int',
      template: './int/index.pug',
    })
  ],
  output: {
    path: path.resolve(__dirname + '/int', 'dist'),
    filename: './[name].bundle.js'
  },
  module: {
   rules: [{
     test: /\.pug/,
     use: 'pug-loader',
   }]
 }
};
