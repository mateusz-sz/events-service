'use strict';

const config = require('./config');
const express = require('express');

// CONSTANS
const PORT = config.app.port;
const HOST = config.app.host;

// APP
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
