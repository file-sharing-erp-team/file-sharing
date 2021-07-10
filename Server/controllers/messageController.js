const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Message = require('../models/messageModels')
const Chat = require('../models/chatModel')
const User = require('../models/model_user')
const Notification = require('../models/notificationModel')

class MessageController {

    //* ОТПРАВИТЬ СООБЩЕНИЕ POST
    //* /file_sharing/msg/send
    async createMsg(req,res,next) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Токен не валиден"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        console.log(req.body)
        
        const {chat_id, user_id, text} = req.body
        if (!chat_id || !user_id || !text) {
            return next(ApiError.badRequest('Некорректные данные'))
        }

        const candidateChat = await Chat.findOne({where: {id: chat_id}})
        if(!candidateChat) {
            return next(ApiError.internal('Чат не существует'))
        }
        
        let message;
        if(candidateChat.user_id === decoded.id){
            message = await Message.create({chat_id, user_id: decoded.id, author_id:candidateChat.author_id, text})
            const notify = await Notification.create({type: 2, user_id: candidateChat.author_id, text: 'Вам пришло новое сообщение (' + candidateChat.chat_name +')'})
        }
        else{
            message = await Message.create({chat_id, user_id: candidateChat.author_id, author_id:decoded.id, text})
            const notify = await Notification.create({type: 2, user_id: decoded.id, text: 'Вам пришло новое сообщение (' + candidateChat.chat_name +')'})
        }
        
        if(!message) {
            return next(ApiError.internal('Ошибка отправки сообщения'))
        }
        const lastUsername = await User.findOne({where: {id:decoded.id}})
        const lastMessage = lastUsername.first_name + ' - ' + text
        const ChatMessage = Chat.update({last_message:lastMessage}, {where: {id:chat_id}})
        if (!ChatMessage) {
            return next(ApiError.internal('Ошибка последнего сообщения'))
        }
        const allMessages = await Message.findAll({chat_id:chat_id})
        return res.status(200).json({allMessages})
    }

    //* ПОКАЗАТЬ СООБЩЕНИЯ GET
    //* /file_sharing/msg/showMessages
    async showMessages (req,res, next) {
        const {chat_id} = req.headers  
        if (!chat_id) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const showMessages = await Message.findAll({where: {chat_id:chat_id}})
        return res.status(200).json({showMessages})
    }
}

module.exports = new MessageController()