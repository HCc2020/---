module.exports = {
    outputDir: "dist",
    lintOnSave: false,
    publicPath: "./",
    devServer: {
        proxy: {
            "/jk": {
                target: "http://101.66.252.21:1001",
                changeOrigin: true,
                // ws: true, // 是否启用websockets
                pathRewrite: {
                    "^/jk": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '怡养义乌-养老服务'
                return args
            })
    },
};