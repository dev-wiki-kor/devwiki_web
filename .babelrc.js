const path = require('path');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['@babel/plugin-transform-private-methods'],
    [
      '@stylexjs/babel-plugin',
      // https://stylexjs.com/docs/api/configuration/babel-plugin/
      {
        dev: process.env.NODE_ENV === 'development',
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        aliases: {
          '@/*': [path.join(__dirname, 'src/*')],
        },
        unstable_moduleResolution: {
          type: 'commonJS',
          rootDir: __dirname,
        },
      },
    ],
  ],
};
