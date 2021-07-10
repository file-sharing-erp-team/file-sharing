const Router = require('express')
const router = new Router
const notificationController = require('../controllers/notificationController')

router.get('/getNotifications',notificationController.getNotifications)  //* /file_sharing/notifications/getNotifications
router.post('/updateStatus', notificationController.updateStatus) //* /file_sharing/notifications/updateStatus
module.exports = router