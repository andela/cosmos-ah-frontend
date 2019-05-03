const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = function () {
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, './public', 'index.html'),
        filename: 'index.html',
      })
    ],
    stats: {
      colors: true,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.scss', '.css']
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, '../public'),
      compress: true,
      port: 9001,
      watchContentBase: true,
      progress: true,
    },
  };
};
