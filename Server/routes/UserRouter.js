const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.POST('/register', userController.register)               //* /file_sharing/user/register
router.POST('/login', userController.login)                     //* /file_sharing/user/login
router.GET('/auth', authMiddleware, userController.check)       //* /file_sharing/user/auth


module.exports = router
