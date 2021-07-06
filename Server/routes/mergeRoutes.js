const Router = require('express')
const router = new Router
const UserRouter = require('./userRouter')
const DocRouter = require('./docRoutes')
const ChatRouter = require('./chatRoutes')
const MessageRouter = require('./messageRoutes')
const AdminController = require('./adminRoutes')
const authMiddleware = require('../middleware/authMiddleware')


//* /file_sharing

router.use('/user', UserRouter)                     //* /file_sharing/user
router.use('/docs', authMiddleware, DocRouter)      //* /file_sharing/docs
router.use('/chat', authMiddleware, ChatRouter)     //* /file_sharing/chat
router.use('/msg', authMiddleware, MessageRouter)   //* /file_sharing/msg
router.use('/admin', authMiddleware, AdminController)   //* /file_sharing/admin

module.exports = router
