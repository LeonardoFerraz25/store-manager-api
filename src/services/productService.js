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

const update = async (name, id) => {
  const isValidSchema = validateRequestProducSchema(name);
  
  if (isValidSchema.type) return isValidSchema;

  const product = await productModel.update(name, id);
  
  if(product === 0) return {message: "Não foi possivel atualizar o produto"};

  const result = {
    id,
    name
  }

  return result;
}

const remove = async (id) => {
  const product = productModel.remove(id);

  if(product === 0) return {message: "Não foi possivel deletar o produto"};

  return true;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}