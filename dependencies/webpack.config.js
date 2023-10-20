const path = require('path');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
    },
    compress: true,
    port: 80,
  },
};