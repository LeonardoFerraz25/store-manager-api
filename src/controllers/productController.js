const productService = require('../services/productService');

const SERVER_ERROR = { "message": "Internal server error" }

const getAll = async (_req, res) => {
  try {
    const products = await productService.getAll();
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR)
  }
}

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await productService.getById(id);
    if(!product) {
      return res.status(404).json({
        "message": "Product not found"
      })
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR);
  }
}

const create = async (req, res) => {
  const { name } = req.body;
  try {
    const product = await productService.create(name);
    if(product.type) return res.status(400).json(product);
    return res.status(201).json(product)
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR);
  }
}

module.exports = {
  getAll,
  getById,
  create
}