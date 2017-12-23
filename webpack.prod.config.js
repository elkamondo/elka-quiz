const webpack = require('webpack');
const config = require('./webpack.config.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = [
  { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
  {
    loader: 'postcss-loader',
    options: {
      /* eslint-disable */
      plugins: loader => [
        require('autoprefixer')({
          browsers: ['last 2 version', 'ie >= 8']
        })
      ]
      /* eslint-enable */
    }
  }
];

config.module.rules = config.module.rules.concat([
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(['style-loader', ...cssLoaders])
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract([...cssLoaders, 'sass-loader'])
  }
]);

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      drop_console: true
    },
    sourceMap: true
  })
);

config.plugins.push(new webpack.LoaderOptionsPlugin({ minimize: true }));
config.plugins.push(new ExtractTextPlugin('bundle.css'));

module.exports = config;
