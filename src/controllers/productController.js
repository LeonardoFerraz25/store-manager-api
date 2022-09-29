const { message } = require('../schemas/productSchema');
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

const update = async (req, res) => {
  const { id } = req.params;
  const { name  } = req.body;
  try {
    const product = await productService.update(name, id);
    if(product.message) return res.status(400).json(product);
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR);
  }
}

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.remove(id);
    if(product.message) return res.status(400).json(product);
    return res.status(200).json({
      message: "produto deletado com sucesso"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json(SERVER_ERROR);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}