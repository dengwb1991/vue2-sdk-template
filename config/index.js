'use strict'

const path = require('path')

module.exports = {
  dev: {
    env: require('./dev.env'),
    cssSourceMap: false,
    useEslint: true,
    assetsSubDirectory: 'static',
    host: '127.0.0.1',
    port: 8088,
    assetsPublicPath: '/',
    cacheBusting: false,
    errorOverlay: true,
    poll: false,
    open: false
  },
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../lib'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
  }
}