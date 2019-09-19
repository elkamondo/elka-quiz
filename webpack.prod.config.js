const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./webpack.config.js');

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
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename: '[id].[hash].css'
  })
);

config.optimization = {
  minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
};

module.exports = config;
