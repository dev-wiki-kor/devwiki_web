/* eslint-disable */

//next.config.js
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})(nextConfig);
