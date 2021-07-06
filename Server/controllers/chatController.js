const ApiError = require('../error/error')
const Chat = require('../models/chatModel')
const ChatUsers = require('../models/chatUsersModel')
const User = require('../models/model_user')

class ChatController {
    async createChat (req,res,next) {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const {userID} = req.body
        if (!userID) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const chatUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        } 
        const chatNAME = chatUser.first_name + ' ' + chatUser.last_name
        const createChat = await Chat.create({chat_name:chatNAME})
        const createChatUsers = await ChatUsers.create({chat_id:createChat.id, author_id:decodedToken.id, user_id:userID})
        //? const chat = await Chat.findOne({where: {chat_name:chatNAME}})
        //? const createChatUsers = await ChatUsers.create({chat_id:chat.id, author_id:decodedToken.id, user_id:userID})
        return res.status(200).json({createChatUsers, chatNAME})  
    }
}