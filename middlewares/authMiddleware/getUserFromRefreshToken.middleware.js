const {authService} = require('../../services');
const CustomError = require('../../error/CustomError');
const {ResponseStatusCodes} = require('../../constant');

module.exports = async (req, res, next) => {
    const token = req.get('Authorization');

    const userFromToken = await authService.getUserFromTokensByParams({refresh_token: token});

    if (!userFromToken) {
        return next(new CustomError('User is not present', ResponseStatusCodes.NOT_FOUND))
    }

    req.user = userFromToken;

    next()
}