const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '../', 'src', 'client', 'app.tsx'),
  output: {
    path: path.resolve(__dirname, '../' ,'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('style.css'),
    // new webpack.IgnorePlugin(/jsdom$/),
    new HtmlWebPackPlugin({
        template: path.resolve(__dirname, '../', 'html', 'index.html'), //'./src/index.html',
        title: 'Webpack server'
    }),


  ],
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js']
  }
}