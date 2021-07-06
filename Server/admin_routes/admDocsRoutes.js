const Router = require('express')
const router = new Router
const AdminDocsController = require('../admin_controllers/admDocsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.get('/getDocsByUserId',checkRole(1), AdminDocsController.getDocsByUserId)    //* /file_sharing/admDocs/getDocsByUserId

module.exports = router