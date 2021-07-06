const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')

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
    
}

module.exports = new AdmDocController()