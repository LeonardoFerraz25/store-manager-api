const addNewProductSchema = require('../schemas/productSchema')

const validateRequestProducSchema = (name) => {
  const { error } = addNewProductSchema
  .validate({name});
  
  if(error)  return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
}

module.exports = {
  validateRequestProducSchema
};