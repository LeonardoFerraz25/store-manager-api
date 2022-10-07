const salesModel = require('../models/salesModel');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return sales;
}

const getById = async (id) => {
  const sale = await salesModel.getById(id);
  if (sale.length === 0) {
    return {message: "Sale not found"}
  }
  return sale;
}

const create = async (date, productId, quantity) => {
  const sale = await salesModel.create(date, productId, quantity);
  return sale;
}

const update = async (id, date, productId, quantity) => {
  const sale = await salesModel.update(id, date, productId, quantity);
  if (sale === 0) {
    return {message: "Sale not found"}
  }
  return sale;
}

const remove = async (id) => {
  const sale = await salesModel.remove(id);
  if (sale === 0) {
    return {message: "Sale not found"}
  }
  return sale;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}