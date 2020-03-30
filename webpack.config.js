const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  devServer: {
    port: 8080,
    clientLogLevel: "none",
    historyApiFallback: true
  },
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
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": false }]
            ]
          }
        }
      },
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