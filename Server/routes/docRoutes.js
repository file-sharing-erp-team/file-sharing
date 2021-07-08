const Router = require('express')
const router = new Router
const docController = require('../controllers/docController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.put('/create', docController.createDoc)       //* /file_sharing/docs/create
router.get('/getDocs', docController.getUserDocs)  //* /file_sharing/docs/getDocs
router.get('/getDocReq/:id', docController.getById)   //* /file_sharing/docs/getDocReq/:id
router.get('/getDocById/:id', docController.getDocById) //* /file_sharing/docs/getDocById/:id

module.exports = router