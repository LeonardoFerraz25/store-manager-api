const express = require('express')
const app = express()
const routes = require('./routes');

app.use('/products', routes.productRouter);

module.exports = app;
