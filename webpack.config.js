const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'public'
  },
  entry: './app/app.module.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        use: [
          'url-loader',
        ]
      },
      {
        test: /\.html$/,
        use: [
          'html-loader',
        ]
      }
    ]
  }
};