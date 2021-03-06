const router = require('express').Router();

const {authController, adminController} = require('../../controllers');
const {authMiddleware, userMiddleware} = require('../../middlewares');

router.post(
    '/',
    authMiddleware.accessTokenChecker,
    authMiddleware.getAdminFromAccessToken,
    adminController.createAdmin
);
router.put(
    '/auth/password-change',
    authMiddleware.accessTokenChecker,
    authMiddleware.getAdminFromAccessToken,
    authController.changePassword
);
router.post(
    '/services/add',
    authMiddleware.accessTokenChecker,
    authMiddleware.getAdminFromAccessToken,
    adminController.addNewMedicalService
);


router.post('/auth', authController.authAdmin);

router.post('/auth/logout', authMiddleware.accessTokenChecker, authController.logoutUser);

router.post(
    '/auth/refresh',
    authMiddleware.refreshTokenChecker,
    authMiddleware.getUserFromRefreshToken,
    authController.refreshToken
);
router.use(
    '/users/:id',
    authMiddleware.accessTokenChecker,
    authMiddleware.getAdminFromAccessToken,
    userMiddleware.userPresent
);

router.put('/users/:id/block', adminController.blockUser);

router.put('/users/:id/unblock', adminController.unblockUser);

router.delete(
    '/services/delete/:id',
    authMiddleware.accessTokenChecker,
    authMiddleware.getAdminFromAccessToken,
    adminController.deleteMedicalService
);

module.exports = router;
