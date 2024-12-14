const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './client/src/index.js',  // Frontend entry point
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
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
            }
          ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      port: 3000,  // Frontend runs on port 3000
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:5000',
        },
    ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './client/src/index.html',
      }),
    ],
    
  };
  