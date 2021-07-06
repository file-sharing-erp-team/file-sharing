const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')

class AdmDocController {

    //* ПОЛУЧИТЬ ВСЕ ЗАЯВКИ ПО ID ПОЛЬЗОВАТЕЛЯ (АДМИНКА) GET 
    //* /file_sharing/admDocs/getDocsByUserId
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
}

module.exports = new AdmDocController()