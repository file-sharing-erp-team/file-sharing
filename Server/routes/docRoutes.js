const Router = require('express')
const router = new Router
const docController = require('../controllers/docController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.PUT('/create', docController.createDoc)                                  //* /file_sharing/docs/create
//router.POST('/getByUserId',checkRole(1), docController.getDocsByUserId)
router.GET('/getDocsByUserId',checkRole(1), docController.getDocsByUserId)      //* /file_sharing/docs/getDocsByUserId
router.GET('/getDocs', docController.getUserDocs)                               //* /file_sharing/docs/getDocs

module.exports = router