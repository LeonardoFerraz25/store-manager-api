const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(`
    SELECT sale_id AS saleId, date, product_id, quantity
    FROM sales_products sp
    JOIN sales s
      ON sp.sale_id = s.id
  `);
  return sales;
}

const getById = async (id) => {
  const [sale] = await connection.execute(`
    SELECT date, product_id, quantity
    FROM sales_products sp
    JOIN sales s
      ON sp.sale_id = s.id
    WHERE sp.sale_id = ?
  `, [id]);
  return sale;
}

module.exports = {
  getAll,
  getById
} 