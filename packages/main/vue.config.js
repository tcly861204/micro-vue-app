const isProd = process.env.NODE_ENV !== 'development'
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  outputDir: isProd ? resolve('../../dist/main') : 'dist',
  publicPath: isProd ? '/micro-app-main' : `/`,
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 3080
  },
  chainWebpack: (config) => {
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
