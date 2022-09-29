const express = require('express');

const productRouter = express.Router();

const productController = require('../controllers/productController');

productRouter.get('/', productController.getAll);

productRouter.get('/:id', productController.getById);

productRouter.post('/', productController.create);

module.exports = productRouter;
