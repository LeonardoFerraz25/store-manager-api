const express = require('express');

const productRouter = express.Router();

const productController = require('../controllers/productController');
const validateProductExist = require('../middlewares/validateProductExist')

productRouter.get('/', productController.getAll);

productRouter.get('/:id',validateProductExist, productController.getById);

productRouter.post('/', productController.create);

productRouter.put('/:id',validateProductExist, productController.update);

module.exports = productRouter;
