const Router = require('express')
const router = new Router
const ChatController = require('../controllers/chatController')



router.PUT('/createChat', ChatController.createChat)                        //* /file_sharing/chat/createChat
router.GET('/getChats', ChatController.showChats)                           //* /file_sharing/chat/getChats
router.GET('/getChatByUserId', ChatController.findChatByUserId)             //* /file_sharing/chat/getChatByUserId
router.DELETE('/deleteChatByUserId', ChatController.deleteChatByUserId)     //* /file_sharing/chat/deleteChatByUserId
//? router.post('/createChat', ChatController.createChat)


module.exports = router