const Router = require('express')
const router = new Router
const AdminDocsController = require('../admin_controllers/admDocsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/getDocsByUserId',checkRole(1), AdminDocsController.getDocsByUserId)    //* /file_sharing/admDocs/getDocsByUserId
router.get('/getDocByStatus',checkRole(1), AdminDocsController.getDocByStatus)    //* /file_sharing/admDocs/getDocByStatus
router.get('/getUnfulfilledDocs',checkRole(1), AdminDocsController.getUnfulfilledDocs)    //* /file_sharing/admDocs/getUnfulfilledDocs
router.get('/getDocsByProcess',checkRole(1), AdminDocsController.getDocsByProcess)    //* /file_sharing/admDocs/getDocsByProcess


module.exports = router