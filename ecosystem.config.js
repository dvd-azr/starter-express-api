module.exports = {
  apps: [
    {
      name: "starter-express-api",
      script: "index.js",
      cwd: "/home/pm2/app",
    },
  ],
  deploy: {
    production: {
      user: "pm2",
      host: ["192.168.0.102", "192.168.0.103"],
      port: ["22", "3333"],
      // GIT remote/branch
      ref: "origin/main",
      // GIT remote
      repo: "git@github.com:dvd-azr/starter-express-api.git",
      // Command run after pull source code
      "post-deploy": "npm install && pm2 reload ecosystem.config.js",
    },
  },
};
