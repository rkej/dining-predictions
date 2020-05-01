const IS_PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    outputDir: 'dist',
    assetsDir: 'static',
    baseUrl: IS_PRODUCTION
  ? 'http://cdn123.com'
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
