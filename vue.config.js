module.exports = {
    // 部署应用时的基本 URL，从 Vue CLI 3.3 起已弃用，请使用publicPath（我的理解是打包出来的路径）
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    devServer: {
        open: true,//设置自动打开
        port: 1880,//设置端口
    }
}

