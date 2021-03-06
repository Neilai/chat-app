const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const os = require("os");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
module.exports = {
  entry: {
    app: [
      "./client/index.jsx",
    ],
  },
  output: {
    filename: "[name].[hash:8].js",
    chunkFilename: '[name].bundle.js',
    path: resolve(__dirname, "../build")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        include: resolve(__dirname, "/client/js"),
        loader: "eslint-loader"
      },
      {
        oneOf: [
          {
            test: /\.(html)$/,
            loader: "html-loader"
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "thread-loader",
                options: {
                  workers: os.cpus().length
                }
              },
              {
                loader: "babel-loader",
                options: {
                  //jsx语法
                  presets: [
                    "@babel/preset-react",
                    //tree shaking 按需加载babel-polifill
                    [
                      "@babel/preset-env",
                      { modules: false, useBuiltIns: "usage"}
                    ]
                  ],
                  plugins: [
                    //支持import 懒加载
                    "@babel/plugin-syntax-dynamic-import",
                    //andt-mobile按需加载  true是less，如果不用less style的值可以写'css'
                    ["import", { libraryName: "antd-mobile", style: "css"}],
                    //识别class组件
                    ["@babel/plugin-proposal-class-properties", { loose: true }]
                  ],
                  cacheDirectory: true
                }
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              {
                loader: "css-loader",
                // options: {
                //   modules: false,
                //   localIdentName: "[local]--[hash:base64:5]"
                // }
              },
            ]
          },
          {
            test: /\.(jpg|jpeg|bmp|svg|png|webp|gif)$/,
            loader: "url-loader",
            options: {
              limit: 8 * 1024,
              name: "[name].[hash:8].[ext]"
            }
          },
          {
            exclude: /\.(js|json|less|css|jsx)$/,
            loader: "file-loader",
            options: {
              outputPath: "media/",
              name: "[name].[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    // new HardSourceWebpackPlugin()
  ],
  mode: "development",
  devServer: {
    contentBase: "../build",
    open: true,
    port: 5000,
    hot: true
  },
  resolve: {
    extensions: [".jsx",".js", ".json" ],
    alias:{
      '@':resolve(__dirname,"../client")
    }
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
    }
  }
};
