const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/model_user')

class AdmUserController {

    //* Регистрация пользователя (АДМИНКА) POST
    //* /file_sharing/admUser/registerUser
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

    //* Удаление пользователя
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
        const deleteUser = await User.destroy({where:{id:userID}})
        if (!deleteUser) {
            return next(ApiError.internal('Ошибка удаление пользователя'))
        }
        const allUsers = User.findAll({raw: true})
        return res.status(200).json({allUsers})
    }

}

module.exports = new AdmUserController()