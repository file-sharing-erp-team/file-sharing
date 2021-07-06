const ApiError = require('../error/error')
const Chat = require('../models/chatModel')
const ChatUsers = require('../models/chatUsersModel')
const User = require('../models/model_user')

class ChatController {
    async createChat (req,res,next) {
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
        const chat = await Chat.findOne({where: {chat_name:chatNAME}})
        const createChatUsers = await ChatUsers.create({chat_id:chat.id, user_id:userID})
        return res.status(200).json({createChatUsers, chatNAME})  
    }
}