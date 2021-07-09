const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/model_user')
const Chat = require('../models/chatModel')
const DocReq = require('../models/docRequest')
const Message = require('../models/messageModels')
const Doc = require('../models/docModel')
const {Op} = require('sequelize')

class AdmUserController {

    //* Регистрация пользователя (АДМИНКА) POST
    //* /file_sharing/admUser/registerUser
    async register (req,res,next) {
        console.log(req.body)
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

    //* Удаление пользователя DELETE
    //* /file_sharing/admUser/deleteUser
    async deleteUser (req, res, next) {
        const {userID} = req.body
        if (!userID) {
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        const deleteChat = await Chat.destroy({where: {[Op.or]:[{author_id: userID},{user_id: userID}]}})
        if (!deleteChat) {
            return next(ApiError.badRequest('Ошибка удаления чатов'))
        }


        const deleteDocReq = await DocReq.destroy({where:{user_id:userID}})
        if (!deleteDocReq) {
            return next(ApiError.badRequest('Ошибка удаления заявок'))
        }

        const deleteMessages = await Message.destroy({where:{[Op.or]:[{user_id:userID}, {author_id: userID}]}})
        if (!deleteMessages) {
            return next(ApiError.badRequest('Ошибка удаления сообщений'))
        }

        const deleteDocs = await Doc.destroy({where:{user_id:userID}})
        if (!deleteDocs) {
            return next(ApiError.badRequest('Ошибка удаления документов'))
        }


        const deleteUser = await User.destroy({where:{id:userID}})
        if (!deleteUser) {
            return next(ApiError.internal('Ошибка удаление пользователя'))
        }
        const allUsers = User.findAll({raw: true})
        if (!allUsers) {
            return next(ApiError.internal('Ошибка получения пользователей'))
        }
        return res.status(200).json({allUsers})
    }

    //* Удаление пользователя DELETE
    //* /file_sharing/admUser/deleteUserByFIO
    async deleteUserByFIO (req, res, next) {
        const {first_name,middle_name,last_name} = req.body
        if (!first_name || !last_name ||! middle_name) {
            return next(ApiError.badRequest('Некорректные данные'))
        }

        const checkUser = await User.findOne({where: {first_name:first_name} && {middle_name:middle_name} && {last_name:last_name}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        const deleteUser = await User.destroy({where:{id:checkUser.id}})
        if (!deleteUser) {
            return next(ApiError.internal('Ошибка удаление пользователя'))
        }
        return res.status(200).json({message:"Пользователь удален"})
    }


    //* Получение всех пользователей GET
    //* /file_sharing/admUser/getAllUsers
    async getAllUsers (req, res, next) {
        const allUsers = await User.findAll({raw: true})
        if (!allUsers) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        return res.status(200).json({allUsers})
    }

}

module.exports = new AdmUserController()