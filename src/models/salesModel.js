const connection = require('./connection');
const { create } = require('./productModel');

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

const create = async (date, productId, quantity) => {
  const [sale] = await connection.execute(`
    INSERT INTO sales (date) VALUES (?)
  `, [date]);
  const { insertId } = sale;
  await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)
  `, [insertId, productId, quantity]);
  return { saleId: insertId, date, productId, quantity };
}

const update = async (id, date, productId, quantity) => {
  await connection.execute(`
    UPDATE sales
    SET date = ?
    WHERE id = ?
  `, [date, id]);
  await connection.execute(`
    UPDATE sales_products
    SET product_id = ?, quantity = ?
    WHERE sale_id = ?
  `, [productId, quantity, id]);
  return { saleId: id, date, productId, quantity };
}

const remove = async (id) => {
  await connection.execute(`
    DELETE FROM sales_products
    WHERE sale_id = ?
  `, [id]);
  await connection.execute(`
    DELETE FROM sales
    WHERE id = ?
  `, [id]);
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
} 