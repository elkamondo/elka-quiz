const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'client/index.html'),
  filename: 'index.html',
  inject: 'body',
  favicon: path.join(__dirname, 'client/assets/icons/favicon.ico')
});

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true
  },
  entry: ['./client/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Store: path.resolve(__dirname, './client/store'),
      Components: path.resolve(__dirname, './client/components/'),
      Assets: path.resolve(__dirname, './client/assets/'),
      Styles: path.resolve(__dirname, './client/styles/'),
      Api: path.resolve(__dirname, './client/api/'),
      '@': path.resolve(__dirname, './client/')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'client')]
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              optipng: {
                optimizationLevel: 7
              },
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              pngquant: {
                quality: [0.75, 0.9],
                speed: 3
              }
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
};
