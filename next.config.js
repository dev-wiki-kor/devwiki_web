/* eslint-disable */

//next.config.js
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const path = require('path');

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = stylexPlugin({
  rootDir: __dirname,
  aliases: {
    '@/*': [path.join(__dirname, 'src/*')],
  },
})(nextConfig);
