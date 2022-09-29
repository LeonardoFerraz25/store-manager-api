const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute('SELECT * FROM StoreManager.products;');
  return products;
}

const getById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id]
  );
  return product;
}

const create = async (name) => {
  const [product] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)', [name]
  );
  return product.insertId;
}

const update = async (name, id) => {
  const [product] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?', [name, id]
  )
  return product.affectedRows;
}

const remove = async (id) => {
  const [product] = await connection.execute(
    'DELETE FROM products WHERE id = ?', [id]
  )
  return product.affectedRows;
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}