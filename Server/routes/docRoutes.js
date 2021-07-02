const Router = require('express')
const router = new Router
const docController = require('../controllers/docController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/')
router.get('/')

module.exports = router