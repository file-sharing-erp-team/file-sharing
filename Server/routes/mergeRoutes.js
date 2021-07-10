const Router = require('express')
const router = new Router

const UserRouter = require('./userRouter')
const DocRouter = require('./docRoutes')
const ChatRouter = require('./chatRoutes')
const MessageRouter = require('./messageRoutes')
const NotificationRouter = require('./notificationRoutes')

const AdmUserRouter = require('../admin_routes/admUserRoutes')
const AdminDocsController = require('../admin_routes/admDocsRoutes')

const authMiddleware = require('../middleware/authMiddleware')



//* /file_sharing

router.use('/user', UserRouter)                     //* /file_sharing/user
router.use('/docs', authMiddleware, DocRouter)      //* /file_sharing/docs
router.use('/chat', authMiddleware, ChatRouter)     //* /file_sharing/chat
router.use('/msg', authMiddleware, MessageRouter)   //* /file_sharing/msg
router.use('/admUser', authMiddleware, AdmUserRouter)   //* /file_sharing/admUser
router.use('/admDocs', authMiddleware, AdminDocsController)   //* /file_sharing/admDocs
router.use('/notifications', authMiddleware, NotificationRouter) //* /file_sharing/notifications

module.exports = router
