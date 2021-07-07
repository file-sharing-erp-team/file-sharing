const Router = require('express')
const router = new Router
const messageController = require('../controllers/messageController')

router.post('/send',messageController.createMsg)            //* /file_sharing/msg/send
router.get('/showMessages',messageController.showMessages)  //* /file_sharing/msg/showMessages

module.exports = router