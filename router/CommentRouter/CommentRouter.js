const router = require('express').Router();

const {commentController} = require('../../controllers');
const {authMiddleware} = require('../../middlewares');

router.get('/', commentController.getAllComments);
router.post(
    '/',
    authMiddleware.accessTokenChecker,
    authMiddleware.getUserFromAccessToken,
    commentController.postComment
);

router.put('/:id',authMiddleware.accessTokenChecker, authMiddleware.getUserFromAccessToken, commentController.editComment);
// router.delete('/',commentController.deleteComment);

module.exports = router;