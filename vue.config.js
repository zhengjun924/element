
module.exports = {
    devServer: {
        proxy: {
            '/zheng': {
                target: 'http://localhost:8088',
                changeOrigin: true,
            },
        }
    }
}