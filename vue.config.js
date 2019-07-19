const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
    assetsDir: 'assets',
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('utils', resolve('src/utils'))
            .set('components', resolve('src/components'))
            .set('pages', resolve('src/pages'))
    },
    devServer: {
        proxy: {
            '/zheng': {
                target: 'http://localhost:8088',
                changeOrigin: true,
            },
        }
    }
}