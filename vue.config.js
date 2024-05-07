const path = require('path');

module.exports = {
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src')); // Adjust 'src' to match your actual source directory
  },
};
