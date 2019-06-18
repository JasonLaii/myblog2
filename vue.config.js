//vue.config.js

module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true
      }
    }
  },
  pwa: {
    iconPaths: {
      favicon32: "avatar.jpg",
      favicon16: "avatar.jpg",
      appleTouchIcon: "avatar.jpg",
      maskIcon: "avatar.jpg",
      msTileImage: "avatar.jpg"
    }
  }
};