const Router = require('express')
const router = new Router
const docController = require('../controllers/docController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', docController.createDoc)
router.post('/getByUserId',checkRole(1), docController.getDocsByUserId)
//? router.get('/getByUserId',checkRole(1), docController.getDocsByUserId)
router.get('/getDocs', docController.getUserDocs)

module.exports = router