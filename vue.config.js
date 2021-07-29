module.exports = {
    chainWebpack: config => {
        if (process.env.use_analyzer) {     // 分析
            config
                .plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
        }
    }
}
