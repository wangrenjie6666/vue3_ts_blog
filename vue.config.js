const {
  defineConfig
} = require('@vue/cli-service')

const path = require('path');
// webpack.config.js
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
        favicon32: 'logo.jpg',
        favicon16: 'logo.jpg',
        appleTouchIcon: 'logo.jpg',
        maskIcon: 'logo.jpg',
        msTileImage: 'logo.jpg'
    }
},
  publicPath: './',
  devServer: {
    port: 6996,
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"))
      .set("@base", resolve("baseConfig"))
      .set("@public", resolve("public"));
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                  @import "@/assets/css/mixins.scss";//@指向src目录
            `
      }
    }
  },
  configureWebpack: {
    // ...
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
  }
})