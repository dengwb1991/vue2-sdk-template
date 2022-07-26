const path = require('path')
const config = require('../config')
const vueLoaderConfig = require('./lib/vue-loader.conf')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = (dir) => path.join(__dirname, '..', dir)
const createLintingRule = function() {
  return {
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test')],
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: !config.dev.showEslintErrorsInOverlay
    }
  };
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      'lib': resolve('src/lib')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(gif|png|jpe?g)(\?\S*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
      },
    ]
  }
}

