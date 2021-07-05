const Router = require('express')
const router = new Router
const UserRouter = require('./userRouter')
const DocRouter = require('./docRoutes')
const ChatRouter = require('./chatRoutes')
const MessageRouter = require('./messageRoutes')
const authMiddleware = require('../middleware/authMiddleware')

router.use('/user', UserRouter)
router.use('/docs', authMiddleware, DocRouter)
router.use('/chat', authMiddleware, ChatRouter)
router.use('/msg', authMiddleware, MessageRouter)

module.exports = router
