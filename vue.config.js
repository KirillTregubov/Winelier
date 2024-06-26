const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  // publicPath: '/winelier/',

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/style/mixins.scss";'
      }
    }
  },

  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        jpegtran: {
          progressive: true
        }
      })
    ]
  }
}
