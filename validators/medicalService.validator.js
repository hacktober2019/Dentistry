const Joi = require('joi');

module.exports = Joi.object().keys({
    service: Joi.string().min(1).required(),
    photo: Joi.string().min(1),
    description: Joi.string().min(1).required(),
    price: Joi.number().min(1).required()

});