const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Message = require('../models/messageModels')
const Chat = require('../models/chatModel')
const User = require('../models/model_user')
const Notification = require('../models/notificationModel')

class NotificationController {

    //* ПОЛУЧИТЬ ВСЕ УВЕДОМЛЕНИЯ ПО ID GET 
    //* /file_sharing/notifications/getNotifications
    async getNotifications(req, res , next){
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Токен не валиден"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const notifications = await Notification.findAll({where:{user_id: decoded.id}})
        if(!notifications){
            return next(ApiError.badRequest('Нет уведомлений'))
        }
        return res.status(200).json({notifications})

    }
}

module.exports = new NotificationController()