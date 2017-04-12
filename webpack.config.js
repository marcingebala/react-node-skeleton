var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  
  entry : [
    './src/index.jsx'
  ],
  
  output: {
    path : __dirname + '/public/js/',
    filename: 'script.js',
    //publicPath: '/'
  },

  resolve: {
    extensions: ['.js','.jsx','.scss']
  },

  module:{
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['es2015','react','stage-2']
        }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]
  },

  plugins: [
    new ExtractTextPlugin('css/style.css')
  ]
}