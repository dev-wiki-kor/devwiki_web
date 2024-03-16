const path = require('path');
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-transform-private-methods'],
    [
      '@stylexjs/babel-plugin',
      // https://stylexjs.com/docs/api/configuration/babel-plugin/
      {
        dev: process.env.NODE_ENV === 'development',
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          '@/*': [path.join(__dirname, '*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: path.join(__dirname, '../..'),
        },
      },
    ],
  ],
};
