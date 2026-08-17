module.exports = {
  apps: [
    {
      name: 'frontline',
      cwd: '/root/frontline',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 7017,
        NODE_ENV: 'production',
        HOST: '0.0.0.0'
      },
      error_file: '/root/.pm2/logs/frontline-error.log',
      out_file: '/root/.pm2/logs/frontline-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      max_memory_restart: '500M'
    }
  ]
};
