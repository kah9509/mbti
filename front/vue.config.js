module.exports = {
  devServer: {
    proxy: {
      '/': {
        // 프록시 요청을 보낼 서버의 주소
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
