const config = {
  app: {
    host: '0.0.0.0',
    port: 8080
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  ui: {
    origin: 'http://localhost:3000',
  }
}

module.exports = config;
