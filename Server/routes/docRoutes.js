const Router = require('express')
const router = new Router
const docController = require('../controllers/docController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.put('/create', docController.createDoc)                                  //* /file_sharing/docs/create
//router.POST('/getByUserId',checkRole(1), docController.getDocsByUserId)
router.get('/getDocsByUserId',checkRole(1), docController.getDocsByUserId)      //* /file_sharing/docs/getDocsByUserId
router.get('/getDocs', docController.getUserDocs)                               //* /file_sharing/docs/getDocs

module.exports = router