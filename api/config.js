const config = {
  app: {
    host: '0.0.0.0',
    port: 8080
  },
  db: {
    host: '0.0.0.0',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    name: 'events-storage', 
  },
}

module.exports = config;
