const Joi = require('joi');

const {ResponseStatusCodes} = require('../../constant');
const {receptionValidator} = require('../../validators');
const {userService} = require('../../services');
const CustomError = require('../../error/CustomError');

module.exports = async (req, res) => {
    try {
        const reception = req.body;

        const validatedReception = Joi.validate(reception, receptionValidator);

        if (validatedReception.error) {
            throw new CustomError(
                validatedReception.error.details[0].message, ResponseStatusCodes.BAD_REQUEST, 'receptionPatient'
            );
        }

        await userService.receptionPatient(reception);

        res.status(ResponseStatusCodes.CREATED).end()

    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller || 'receptionPatient'
            })
    }
}