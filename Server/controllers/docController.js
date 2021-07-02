const ApiError = require('../error/error')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')

class DocController {

    async createDoc (req,res,next) {
        const {type , userID, firstName, lastName, middleName, phone, group, files} = req.body
        if (!type || !userID || !firstName || !lastName || !middleName ||!phone ||!group ||!files) {
            return next(ApiError.badRequest('Некорректные данные'))
        }

        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        
        const doc = await Doc.create({login, password: hashPassword, group_id, first_name, middle_name, last_name, role  })
        return res.status(200).json({user})
    }
}