const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: './src/app.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devServer: {
    static: path.join(__dirname, 'public')
  }
}

const serverConfig = {
  entry: './server/index.js',
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    __dirname: false,
  }
}

module.exports = [serverConfig, clientConfig]
