'use strict';

const express = require('express');
const eventRoutes = require('./src/event/routes');

// APP
const app = express();

app.use(express.json());

app.use('/api/v1/events', eventRoutes);

module.exports = app;
