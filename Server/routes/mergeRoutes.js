const Router = require('express')
const router = new Router
const UserRouter = require('./userRouter')
const DocRouter = require('./docRoutes')
const ChatRouter = require('./chatRoutes')
const MessageRouter = require('./messageRoutes')

router.use('/user',UserRouter)
router.use('/docs',DocRouter)
router.use('/chat', ChatRouter)
router.use('/msg', MessageRouter)

module.exports = router
