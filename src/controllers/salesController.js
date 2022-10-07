const salesSevice = require('../services/salesService');

const SERVER_ERROR = { "message": "Internal server error" }

const getAll = (_req, res) => {
  try {
    const sales = salesSevice.getAll();
    return res.status(200).json(sales);
    
  } catch (error) {
    console.log(error)
    return res.status(500).json(SERVER_ERROR);
  }
}

const getById = (req, res) => {
  const { id } = req.params;
  try {
    const sale = salesSevice.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error)
    return res.status(500).json(SERVER_ERROR);
  }
}

const create = (req, res) => {
  const { date, productId, quantity } = req.body;
  try {
    const sale = salesSevice.create(date, productId, quantity);
    return res.status(201).json(sale);
  } catch (error) {
    console.log(error)
    return res.status(500).json(SERVER_ERROR);
  }
}

const update = (req, res) => {
  const { id } = req.params;
  const {date, productId, quantity } = req.body;
  try {
    const sale = salesSevice.update(id, date, productId, quantity);
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error)
    return res.status(500).json(SERVER_ERROR);
  }
}

const remove = (req, res) => {
  const { id } = req.params;
  try {
    const sale = salesSevice.remove(id);
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error)
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