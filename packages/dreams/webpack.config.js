const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: './src/entry.js',
  mode: 'development',
  devServer: {
    hot: true,
    port: 8001,
    // open: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'astrology',
      remotes: {
        components: 'components@//localhost:9000/__remote/entry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: false,
        },
      },
    }),
  ],
};
