const Router = require('express')
const router = new Router
const AdminUserController = require('../admin_controllers/admUserController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registerUser', checkRole(1), AdminUserController.register)    //* /file_sharing/admUser/registerUser
router.delete('/deleteUser', checkRole(1), AdminUserController.deleteUser)    //* /file_sharing/admUser/deleteUser
router.delete('/deleteUserByFIO', checkRole(1), AdminUserController.deleteUserByFIO)    //* /file_sharing/admUser/deleteUserByFIO
router.get('/getAllUsers', checkRole(1), AdminUserController.getAllUsers)   //* /file_sharing/admUser/getAllUsers

module.exports = router