const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// пока все в одном. Потом надо разбить
module.exports = {
  mode: 'development',
  entry: [ "@babel/polyfill", "./src/app.tsx" ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../','dist'),
    publicPath: '/',
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
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      title: 'Webpack server'
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new MiniCssExtractPlugin({
    //   // Options similar to the same options in webpackOptions.output
    //   // both options are optional
    //   filename: 'style.css'
    // }),
  ],
  devServer: {
    contentBase: './public',
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.jsx', '.tsx', '.ts', '.js']
  }
};