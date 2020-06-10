module.exports = {
  // devServer: {
  //   proxy: {
  //     '^/api': {
  //       target: 'http://127.0.0.1:5000',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ],
}