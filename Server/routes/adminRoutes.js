const Router = require('express')
const router = new Router
const AdminController = require('../controllers/adminController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/')
router.get('/')

module.exports = router