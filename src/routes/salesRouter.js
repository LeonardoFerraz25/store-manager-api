const express = require('express');

const salesRouter = express.Router();

const salesController = require('../controllers/salesController');

salesRouter.get('/', salesController.getAll);

salesRouter.get('/:id', salesController.getById);

salesRouter.post('/', salesController.create);

salesRouter.put('/:id', salesController.update);

salesRouter.delete('/:id', salesController.remove);

module.exports = salesRouter;