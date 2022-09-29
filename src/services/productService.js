const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);
  if(product.length === 0) {
    return false;
  }
  return product;
}

module.exports = {
  getAll,
  getById
}