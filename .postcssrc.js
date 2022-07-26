module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 75,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: process.env.NODE_ENV === 'production', // 开发环境不替换原始值, 方便调试
      mediaQuery: false,
      minPixelValue: 0
    }),
    // to edit target browsers: use "browserslist" field in package.json
    require('autoprefixer')({
      'overrideBrowserslist': ['> 1%', 'last 5 versions']
    })
  ]
}