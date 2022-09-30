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

module.exports = {
  getAll,
  getById
}