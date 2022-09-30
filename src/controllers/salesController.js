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
  const { id } = req.body;
  try {
    const sale = salesSevice.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error)
    return res.status(500).json(SERVER_ERROR);
  }
}

module.exports = {
  getAll,
  getById
}