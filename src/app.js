const express = require('express')
const app = express()
const routes = require('./routes');

app.use(express.json());
app.use('/products', routes.productRouter);
app.use('/sales', routes.salesRouter);

module.exports = app;
