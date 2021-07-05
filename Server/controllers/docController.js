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
        const docReq = await DocReq.create({user_id:userID, file_id:files}) //заполняем docRequest 
        //const doc = await Doc.create({id:files})  //! Раскоментить когда разберемся со всеми данными файла
        return res.status(200).json({docReq})   //! Добавить doc
    }


    async getDocsByUserId (req, res, next) {
        //? const {userID} = req.headers
        const {userID} = req.body
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