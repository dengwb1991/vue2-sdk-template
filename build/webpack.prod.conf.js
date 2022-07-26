const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')
const config = require('../config')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const configuration = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: './src/lib/index.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: 'my-lib.js',
    library: 'my-lib',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    new cleanWebpackPlugin(['../lib']),
    new uglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    })
  ]
})

module.exports = configuration