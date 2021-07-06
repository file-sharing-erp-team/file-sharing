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
        return res.json({token: token, userId: user.id, role: user.role})
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
