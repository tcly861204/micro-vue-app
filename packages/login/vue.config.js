const isProd = process.env.NODE_ENV !== 'development'
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const { name } = require('./package.json')
const port = 3081
module.exports = {
  outputDir: isProd ? resolve('../../dist/login') : 'dist',
  publicPath: isProd ? '/micro-app-login' : `//localhost:${port}`,
  devServer: {
    port: 3081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
