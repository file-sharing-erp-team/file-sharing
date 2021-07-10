const Router = require('express')
const router = new Router
const notificationController = require('../controllers/notificationController')

router.get('/getNotifications',notificationController.getNotifications)  //* /file_sharing/notifications/getNotifications

module.exports = router