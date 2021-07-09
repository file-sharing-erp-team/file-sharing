const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')
const Chat = require('../models/chatModel')
const Message = require('../models/messageModels')

class AdmDocController {

    //* ПОЛУЧИТЬ ВСЕ ЗАЯВКИ ПО ID ПОЛЬЗОВАТЕЛЯ (АДМИНКА) GET 
    //* /file_sharing/admDocs/getDocByUserId
    async getDocsByUserId (req, res, next) {
        const {userID} = req.headers            //? в случае если id пользователя в хедере, раскоментить эту строчку
        //const {userID} = req.body             //? в случае если id в хедере, закоментить 
        if (!userID) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        const userDocs = await DocReq.findOne({where: {user_id:userID}})
        return res.status(200).json({userDocs})
    }

    //* ПОЛУЧЕНИЕ ЗАЯВОК ПО СТАТУСУ ВЫПОЛНЕНИЯ (АДМИНКА) GET
    //* /file_sharing/admDocs/getDocByStatus
    async getDocByStatus (req, res, next) {
        const {status} = req.headers   
        const findDocByStatus = await DocReq.findAll({status:status})
        if(!findDocByStatus) {
            return next(ApiError.badRequest('Заявок с таким статусом не найдено'))
        }
        return res.status(200).json({findDocByStatus})
    }

    //* ПОЛУЧЕНИЕ ВСЕХ ЗАЯВОК КРОМЕ ВЫПОЛНЕННЫХ (АДМИНКА) GET
    //* /file_sharing/admDocs/getUnfulfilledDocs
    async getUnfulfilledDocs (req, res, next) {
        const ShowUnfulfilledDoc = await DocReq.findAll({status:0} || {status:1} || {status:2})
        if(!ShowUnfulfilledDoc) {
            return next(ApiError.badRequest('Все заявки выполнены или они не найдены'))
        }
        return res.status(200).json({ShowUnfulfilledDoc})
    }

    //* ПОЛУЧЕНИЕ ЗАЯВОК (АКТИВНЫЕ ИЛИ НЕ АКТИВНЫЕ) GET
    //* /file_sharing/admDocs/getDocsByProcess
    async getDocsByProcess (req, res, next) {
        const {processed} = req.headers   
        const findByProcess = await DocReq.findAll({processed:processed})
        if(!findByProcess) {
            return next(ApiError.badRequest('Заявок с таким статусом не найдено'))
        }
        return res.status(200).json({findByProcess})
    }

    //* ОБНОВЛЕНИЕ СТАТУСА ЗАЯВКИ POST
    //* /file_sharing/admDocs/updateDocsStatus
    async updateStatus (req, res, next) {
        const {id,status, message, senderId, userId} = req.body
        const firstUser = await User.findOne({where: {id:userId}})
        if (!firstUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        } 
        const secUser = await User.findOne({where: {id:senderId}})
        if (!secUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        } 
        const candidateChat = await Chat.findOne({where: {author_id:userId, user_id:senderId} 
            || {author_id:senderId,user_id:userId}})

        //const updateStatus = DocReq.update({status:status}, {where: {id:id}})
        if (candidateChat) {
            //return next(ApiError.badRequest('Такой чат уже существует'))
            console.log(candidateChat.dataValues.id)
            const newMessage = await Message.create({chat_id:candidateChat.dataValues.id, user_id:senderId, author_id:userId, text:message})
            
            if(!newMessage){
                return next(ApiError.internal('Ошибка создания сообщения'))
            }
           
            const lastMessage = firstUser.first_name + ' - ' + message
            const ChatMessage = await Chat.update({last_message:lastMessage},{where: {id:candidateChat.id }})
            if(!ChatMessage){
                return next(ApiError.internal('Ошибка добавления сообщения'))
            }
            
            
            
        }
        else if(!candidateChat){
            const chatNAME = firstUser.first_name + ' ' + firstUser.last_name + ' --- ' + secUser.first_name + ' ' + secUser.last_name
            const createChat = await Chat.create({chat_name:chatNAME, author_id:userId, user_id:senderId})
            console.log(createChat)
            if(!createChat){
                return next(ApiError.internal('Ошибка обновления статуса выполнения'))
            }
            const findChat = await Chat.findOne({where:{chat_name: chatNAME}})
            if(!findChat){
                return next(ApiError.internal('Ошибка обновления статуса выполнения'))
            }
            const newMessage = await Message.create({chat_id: createChat.id, user_id:senderId, author_id:userId, text:message})
            if(!newMessage){
                return next(ApiError.internal('Ошибка обновления статуса выполнения'))
            }
            const lastMessage = firstUser.first_name + ' - ' + message
            const ChatMessage = await Chat.update({last_message:lastMessage}, {where: {id:createChat.id}})
            if(!ChatMessage){
                return next(ApiError.internal('Ошибка обновления статуса выполнения'))
            }
        }

        const updateStatus = DocReq.update({status:status}, {where: {id:id}})
        if (!updateStatus) {
            return next(ApiError.internal('Ошибка обновления статуса выполнения'))
        }
        return res.status(200).json({message: "Success"})
    }

    //* ОБНОВЛЕНИЕ СТАТУСА ВЫПОЛНЕНИЯ ЗАЯВКИ (АКТИВНАЯ \ НЕ АКТИВНАЯ) POST
    //* /file_sharing/admDocs/updateDocsProcess
    async updateProcess (req, res, next) {
        const {id,processed} = req.body
        const updateStatus = DocReq.update({processed:processed}, {where: {id:id}})
        if (!updateStatus) {
            return next(ApiError.internal('Ошибка обновления статуса '))
        }
        return res.status(200).json({updateStatus})
    }

}

module.exports = new AdmDocController()