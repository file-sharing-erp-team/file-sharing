const ApiError = require('../error/error')
const Chat = require('../models/chatModel')
const ChatUsers = require('../models/chatUsersModel')
const User = require('../models/model_user')

class ChatController {

    //* PUT
    //* /file_sharing/chat/createChat
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

        const candidateChat = await ChatUsers.findOne({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (candidateChat) {
            return next(ApiError.badRequest('Такой чат уже существует'))
        }

        const chatNAME = chatUser.first_name + ' ' + chatUser.last_name
        const createChat = await Chat.create({chat_name:chatNAME})
        const createChatUsers = await ChatUsers.create({chat_id:createChat.id, author_id:decodedToken.id, user_id:userID})
        //? const chat = await Chat.findOne({where: {chat_name:chatNAME}})
        //? const createChatUsers = await ChatUsers.create({chat_id:chat.id, author_id:decodedToken.id, user_id:userID})
        return res.status(201).json({createChatUsers, chatNAME})  
    }

    //* GET
    //* /file_sharing/chat/getChats
    async showChats (req, res, next) {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const chats = await ChatUsers.findAll({author_id:decodedToken.id} || {user_id:decodedToken.id})
        if (!chats) {
            return next(ApiError.internal('Нет чатов'))
        }
        return res.status(200).json({chats})  
    }

    //* DELETE
    //* /file_sharing/chat/deleteChatByUserId
    async deleteChatByUserId (req, res, next) {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

        const {userID} = req.body
        if (!userID) {
            return next(ApiError.badRequest('Некорректные данные'))
        }

        const findChatId = await ChatUsers.findOne({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (!findChatId) {
            return next(ApiError.badRequest('Чата не существует'))
        }

        const deleteChat = await Chat.destroy({where: {id:findChatId.id}})
        const deleteChatUsers = await ChatUsers.destroy({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (!deleteChatUsers || !deleteChat) {
            return next(ApiError.badRequest('Ошибка удаления чата'))
        }

        const chats = await ChatUsers.findAll({author_id:decodedToken.id} || {user_id:decodedToken.id})
        if (!chats) {
            return next(ApiError.internal('Нет чатов'))
        }
        return res.status(200).json({chats})  
    }

    //* GET
    //* /file_sharing/chat/getChatByUserId
    async findChatByUserId (req, res, next) {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const {userID} = req.headers
        const chat = await ChatUsers.findOne({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (!chat) {
                return next(ApiError.internal('Чата не существует'))
        }
        return res.status(200).json({chat}) 
    }
}

module.exports = new ChatController()