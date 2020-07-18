const path = require('path');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
  target: 'node',
  entry: path.resolve(__dirname, '../', 'src', 'server', 'index.tsx'),
  externals: [nodeExternals({
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
  })],
  output: {
    path: path.resolve(__dirname, '../', 'dist', 'server'),
    filename: 'index.js',
  },
  module: {

  },
  plugins: [

  ],
});
