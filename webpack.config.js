const path = require('path')
const {
  VueLoaderPlugin
} = require('vue-loader')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: 'vue-loader'
    }, {
      test: /\.m?js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }, {
      test: /\.(jpe?g|png|svg|gif|svg|webp)$/,
      type: 'asset/resource'
    }, {
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    static: "./dist",
    open: true
  },
}