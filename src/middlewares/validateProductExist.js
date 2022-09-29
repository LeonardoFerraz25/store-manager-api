const productService = require('../services/productService');

const validateProductExist = async (req, res, next) => {
  const { id } = req.params;
  const product = await productService.getById(id);
    if(!product) {
      return res.status(404).json({
        "message": "Product not found"
      })
    }
  next();
}

module.exports = validateProductExist;