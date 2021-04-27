const Joi = require('joi')
const schemas = {
  markups: Joi.object().keys({
    sort: Joi.object().keys({
      column: Joi.string().valid('out_frame', 'in_frame').allow(null, ''),
      type: Joi.string().valid('asc', 'desc').allow(null, '')
    }),
    filter: Joi.object().keys({
      value: Joi.string().allow(null, ''),
      exact: Joi.boolean().allow(null, '')
    })
  })
  // define all the other schemas below
};
module.exports = schemas;
