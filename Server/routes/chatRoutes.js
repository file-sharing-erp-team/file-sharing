const Router = require('express')
const router = new Router
const ChatController = require('../controllers/chatController')

router.put('/createChat', ChatController.createChat)
//? router.post('/createChat', ChatController.createChat)
router.get('/getChats', ChatController.showChats)

module.exports = router