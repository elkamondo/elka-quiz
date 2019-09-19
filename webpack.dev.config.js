const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./webpack.config.js');

config.devtool = 'cheap-module-eval-source-map';
config.module.rules = config.module.rules.concat([
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development'
        }
      },
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
]);

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

config.plugins.push(
  new webpack.LoaderOptionsPlugin({
    debug: true
  })
);

config.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
);

config.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = config;
