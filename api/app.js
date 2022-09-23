'use strict';

const express = require('express');
const cors = require('cors');
const eventRoutes = require('./src/event/routes');
const { ui: uiConfig } = require('./config');

// APP
const app = express();

app.use(cors({ origin: uiConfig.origin }));

app.use(express.json());

app.use('/api/v1/events', eventRoutes);

module.exports = app;
