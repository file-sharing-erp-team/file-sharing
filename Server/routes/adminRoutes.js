const Router = require('express')
const router = new Router
const AdminController = require('../controllers/adminController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/registerUser', checkRole(1), AdminController.register)            //* /file_sharing/admin/registerUser
router.get('/getDocsByUserId',checkRole(1), AdminController.getDocsByUserId)    //* /file_sharing/admin/getDocsByUserId          //* /file_sharing/user/registerUser
router.post('/')
router.get('/')

module.exports = router