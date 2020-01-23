const {DB_TABLE_NAME} = require('../../constant');
const db = require('../../dataBase').getInstance();

module.exports = async (comment, id) => {

    const CommentModel = db.getModel(DB_TABLE_NAME.COMMENT);

    await CommentModel.update(comment,
        {
            where: {
                id
            }
        }
    )

}