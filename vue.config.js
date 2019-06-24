//vue.config.js

module.exports = {
  devServer: {
    proxy: {
      "/author": {
        target: "http://localhost:3000",
        changeOrigin: true,
        
      },
      "/api":{
        target: "http://localhost:3000",
        changeOrigin: true,
        // pathRewrite:{
        //   '^/api': '/'
        // }
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