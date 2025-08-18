module.exports = {
  apps: [
    {
      name: '•𝙱𝙚᥉𝕥ĩ𝙚᥉ƒ𝗼𝓻𝙚ѵᥱ𝓻💕🐝•',
      script: 'index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
