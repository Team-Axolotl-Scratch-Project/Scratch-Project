const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config({ path: './.env' })


module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, //what files needs to be compiled by checking the file types
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', `@babel/preset-react`],
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    proxy: {
      // Added back /api here to ensure that only requests to /api are sent to back end. All front-end requests must be handled by react routers
      '/transfer': 'http://localhost:3000'
  },
    compress: true,
    port: 8080,
    // This is a nevessary setting to ensure new front-end requests go to react routers
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './index.html')
  })],
};