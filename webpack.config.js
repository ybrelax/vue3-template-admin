const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const apiMocker = require("mocker-api");

module.exports = {
  entry: ['@babel/polyfill', './src/index.ts'],
  devServer: {
    port: 8080,
    clientLogLevel: "none",
    historyApiFallback: true,
    before(app) {
      apiMocker(app, path.resolve("./mock/index.ts"));
    }
  },
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    extensions: ['.ts', '.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader'
        }
        ,{
            loader: 'ts-loader',
            options: {
            transpileOnly: true,
            appendTsSuffixTo: ['\\.vue$'],
            happyPackMode: true
            }
        }
        ]
    }
     ,
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
}