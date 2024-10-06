const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    content: './src/scripts/content/main.ts',
    background: './src/scripts/background.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/images', to: 'images' }, // Copies images to dist/images
      ],
    }),
  ],
  target: 'web',
};
