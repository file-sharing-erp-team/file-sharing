const Router = require('express')
const router = new Router
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registerUser', userController.register)           //* /file_sharing/user/registerUser
router.post('/login', userController.login)                     //* /file_sharing/user/login
router.get('/auth', authMiddleware, userController.check)       //* /file_sharing/user/auth
router.get('/getInfo/:id', authMiddleware, userController.getInfo)       //* /file_sharing/user/getInfo/:id


module.exports = router
