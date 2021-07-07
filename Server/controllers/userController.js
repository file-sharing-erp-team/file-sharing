const ApiError = require('../error/error')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/model_user')

const generateJwt = (id, login,role) => {
    return jwt.sign(
        {id, login, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {

    //! ВРЕМЕННАЯ ЗАТЫЧКА
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


    //* POST
    //* /file_sharing/user/login
    async login (req,res,next) {
        const {login, password} = req.body
        const user = await User.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.login, user.role)
        return res.status(200).json({token: token, userId: user.id, role: user.role})
    }

    //* GET
    //* /file_sharing/user/auth
    async check (req,res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        if(!token) {
            return next(ApiError.badRequest('Ошибка токена')) 
        }
        return res.json({token})
    }
}

module.exports = new UserController()
