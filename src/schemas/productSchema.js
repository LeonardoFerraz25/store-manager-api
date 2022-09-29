const Joi = require('joi');

const addNewProductSchema = Joi.object({
  name: Joi.string().min(3).required()
})

module.exports = addNewProductSchema;