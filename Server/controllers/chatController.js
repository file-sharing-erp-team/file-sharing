const ApiError = require('../error/error')
const Chat = require('../models/chatModel')
//? const ChatUsers = require('../models/chatUsersModel')
const User = require('../models/model_user')
const jwt = require('jsonwebtoken')

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
        const firstUser = await User.findOne({where: {id:userID}})
        if (!firstUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        } 
        const secUser = await User.findOne({where: {id:decodedToken.id}})
        if (!secUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        } 

        const candidateChat = await Chat.findOne({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (candidateChat) {
            return next(ApiError.badRequest('Такой чат уже существует'))
        }

        const chatNAME = firstUser.first_name + ' ' + firstUser.last_name + ' --- ' + secUser.first_name + ' ' + secUser.last_name
        const createChat = await Chat.create({chat_name:chatNAME, author_id:decodedToken.id, user_id:userID})
        return res.status(201).json({createChat})
    }

    //* GET
    //* /file_sharing/chat/getAllChats

    async getAllChats (req, res, next) {
        const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)

        const candidateChats = await Chat.findAll({where:{author_id:decodedToken.id} || {user_id:decodedToken.id}})
        if (!candidateChats) {
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

        const deleteChat = await Chat.destroy({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (!deleteChat) {
            return next(ApiError.badRequest('Ошибка удаления чата'))
        }
        const chats = await Chat.findAll({where:{author_id:decodedToken.id} || {user_id:decodedToken.id}})
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
        const chat = await Chat.findOne({where: {author_id:userID, user_id:decodedToken.id} 
            || {author_id:decodedToken.id,user_id:userID}})
        if (!chat) {
                return next(ApiError.internal('Чата не существует'))
        }
        return res.status(200).json({chat}) 
    }
}

module.exports = new ChatController()