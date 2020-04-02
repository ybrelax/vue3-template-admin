const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const apiMocker = require("mocker-api");

module.exports = {
  entry: ["./src/index.ts"],
  output: {
    path: path.resolve(__dirname, "build"), //必须是绝对路径
    filename: "[name].[hash:6].js",
    publicPath: "/" //通常是CDN地址
  },

  devServer: {
    port: 8080,
    clientLogLevel: "none",
    historyApiFallback: true,
    before(app) {
      apiMocker(app, path.resolve("./mock/index.js"));
    }
  },
  devtool: "inline-source-map",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    },
    extensions: [".ts", ".js", ".json", ".vue"]
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true
            }
          }
        ]
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return require("autoprefixer")({
                  overrideBrowserslist: [">0.25%", "not dead"]
                });
              }
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
            {
                loader: 'url-loader',
                options: {
                    limit: 10240, //10K
                    esModule: false,
                    name: '[name]_[hash:6].[ext]',
                    outputPath: 'assets'
                }
            }
        ],
     }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
};
