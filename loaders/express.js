const express = require('express');
const cors = require('cors');
const apiRouter = require('../routes/v1/api');
const config = require('../config/app');

module.exports = async (app) => {
app.use(cors());
app.use(express.json());
app.use(config.api.prefix, apiRouter);
return app;
};