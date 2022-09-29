const productModel = require('../models/productModel');
const { validateRequestProducSchema } = require('./validations');

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

const create = async (name) => {
  const isValidSchema = validateRequestProducSchema(name);

  if (isValidSchema.type) return isValidSchema;

  const id = await productModel.create(name);
  const result = [{
    id,
    name,
  }]
  return result;
}

module.exports = {
  getAll,
  getById,
  create
}