const express = require('express');

const salesRouter = express.Router();

const salesController = require('../controllers/salesController');

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

module.exports = salesRouter;