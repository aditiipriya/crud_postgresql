// ecosystem.config.js
module.exports = {
    apps: [
      {
        name: 'crud_postgresql', 
        script: 'server.js', 
        instances: 'max',
        exec_mode: 'cluster',
        watch: true,
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  