const Router = require('express')
const router = new Router
const ChatController = require('../controllers/chatController')



router.put('/createChat', ChatController.createChat)                        //* /file_sharing/chat/createChat
router.get('/getAllChats', ChatController.getAllChats)                           //* /file_sharing/chat/getAllChats
router.get('/getChatByUserId', ChatController.findChatByUserId)             //* /file_sharing/chat/getChatByUserId
router.delete('/deleteChatByUserId', ChatController.deleteChatByUserId)     //* /file_sharing/chat/deleteChatByUserId
//? router.post('/createChat', ChatController.createChat)


module.exports = router