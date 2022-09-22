'use strict';

const config = require('./config');
const app = require('./app');

// CONSTANS
const PORT = config.app.port;
const HOST = config.app.host;

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
