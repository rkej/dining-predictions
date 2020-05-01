const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    publicPath: IS_PRODUCTION
  ? 'http://dining-predictions.herokuapp.com'
  : '/static',
    devServer: {
            proxy: {
                '^/api': {
                    target: 'http://localhost:5000',
                    ws: true,
                    changeOrigin: true
                  }
            }
        }}

