module.exports = {
  apps: [
    {
      name: 'devwiki-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 0,
      exec_mode: 'cluster',
    },
  ],
};
