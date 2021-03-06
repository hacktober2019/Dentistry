const Joi = require('joi');

const {noCopyRegex} = require('../constant');

module.exports = Joi.object().keys({
    phone_number: Joi.number().integer().required(),
    email: Joi.string().email().required(),
    date: Joi.date(),
    name: Joi.string().min(2).max(40).required(),
    middle_name: Joi.string().min(2).max(40).required(),
    surname: Joi.string().min(2).max(40).required(),
    age: Joi.number().integer().min(1).max(120).required(),
    service_id: Joi.number().integer().required()
});