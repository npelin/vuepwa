const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // serve:{
  //   host: '0.0.0.0',  
  //   port: 5174
  // },
  publicPath: process.env.NODE_ENV === "production" ? "/vuepwa/" : "/",
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: './src/service-worker-dev.js',
      //swDest: ''
    },
  },
})
