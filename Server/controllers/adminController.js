const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')

class AdminController {

    //* Регистрация пользователя (АДМИНКА) POST
    //* /file_sharing/admin/registerUser
    async register (req,res,next) {
        const {login, password,group_id,first_name,middle_name,last_name,role} = req.body
        if (!login || !password || !group_id || !first_name || !middle_name ||!last_name ||!role) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, password: hashPassword, group_id, first_name, middle_name, last_name, role  })
        return res.status(200).json({user})
    }

    //* ПОЛУЧИТЬ ВСЕ ЗАЯВКИ ПО ID ПОЛЬЗОВАТЕЛЯ (АДМИНКА) GET 
    //* /file_sharing/admin/getDocsByUserId
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
        const userDocs = await docReq.findOne({where: {user_id:userID}})
        return res.status(200).json({userDocs})
    }



}

module.exports = new AdminController()