const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
module.exports = () => {
  const env = dotenv.config().parsed;

  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    output: {
      filename: "app.bundle.js",
      publicPath: "/"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html"
      }),
      new webpack.DefinePlugin(envKeys)
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "images/[hash]-[name].[ext]"
              }
            }
          ]
        }
      ]
    }
  };
};
