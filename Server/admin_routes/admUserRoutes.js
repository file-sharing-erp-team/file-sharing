const Router = require('express')
const router = new Router
const AdminUserController = require('../admin_controllers/admUserController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registerUser', checkRole(1), AdminUserController.register)    //* /file_sharing/admUser/registerUser

module.exports = router