const {userService} = require('../../services');
const {emailService} = require('../../services');
const CustomError = require('../../error/CustomError');
const {ResponseStatusCodes} = require('../../constant');

module.exports = async (req, res) => {
    try {
        const {user_id: id} = req.user;

        const userPresent = await userService.getUserById(id);

        if (!userPresent) {
            throw new CustomError('User is not present', ResponseStatusCodes.NOT_FOUND, 'sendEmailForChangePassword');
        }

        await emailService.sendEmailForChangePassword(userPresent.email);

        res.status(ResponseStatusCodes.CREATED).end()
    } catch (e) {
        res
            .status(e.status)
            .json({
                message: e.message,
                controller: e.controller
            })
    }
}