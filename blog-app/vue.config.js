const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {allowedHosts: 'all'},
    publicPath: "/blog-app",
    outputDir: "dist"
})
