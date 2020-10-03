const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets/images/icon.png', to: 'icons/icon_48.png' },
        { from: 'src/assets/images/icon.png', to: 'icons/icon_128.png' },
        { from: 'src/popup/popup.html', to: 'popup/popup.html' },
        { from: 'src/options/options.html', to: 'options/options.html' },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  entry: {
    'popup/popup': './src/popup/popup.tsx',
    'options/options': './src/options/options.tsx',
    'content_script': './src/content_script/index.js',
    'background': './src/background/index.js',
    // 'iframe/audioVisualizer': './iframe/audioVisualizer.js',
    // 'iframe/cameraPreview': './iframe/cameraPreview.js',
    // 'permission': './permission.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
};

module.exports = config;