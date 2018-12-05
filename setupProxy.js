const proxy = require('http-proxy-middleware');
const config = {
  '/api/motd': {
    target: 'https://694y9v59lf.execute-api.eu-west-2.amazonaws.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/motd': '/latest/motd'
    }
  },
  '/api/gameOfLife': {
    target: 'https://694y9v59lf.execute-api.eu-west-2.amazonaws.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/gameOfLife': '/latest/gameOfLife'
    }
  },
  '/api/todo': {
    target: 'https://694y9v59lf.execute-api.eu-west-2.amazonaws.com',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/todo': '/latest/todo'
    }
  },
  '/api/ipify': {
    target: 'https://api.ipify.org/',
    changeOrigin: true,
    secure: false,
    pathRewrite: {
      '^/api/ipify': ''
    }
  }
};
module.exports = app =>
  Object.entries(config).forEach(e => app.use(proxy(...e)));
