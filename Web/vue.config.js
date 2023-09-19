const {defineConfig} = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    transpileDependencies: true,
    lintOnSave: false,
    productionSourceMap: false,
    // 输出文件目录
    outputDir: "dist",
    // 静态资源存放的文件夹(相对于outputDir)
    assetsDir: "assets",
    configureWebpack: {
        plugins: [
            new CompressionPlugin({
                algorithm: 'gzip', // 使用gzip压缩
                test: /\.js$|\.html$|\.css$/, // 匹配文件名
                filename: '[path][base].gz[query]', // 压缩后的文件名(保持原文件名，后缀加.gz)
                minRatio: 1, // 压缩率小于1才会压缩
                threshold: 10240, // 对超过10k的数据压缩
                deleteOriginalAssets: false, // 是否删除未压缩的源文件，
            }),
        ],
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: true
                        },
                        mangle: true, // 开启代码混淆
                        output: {
                            comments: true // 删除注释
                        }
                    }
                })
            ]
        }
    }
})
