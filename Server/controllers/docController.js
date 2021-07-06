const ApiError = require('../error/error')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')

class DocController {

    //* СОЗДАТЬ ЗАЯВКУ PUT
    //* /file_sharing/docs/create
    //TODO ПРИВЯЗАТЬ СОЗДАНИЕ И СОХРАНЕНИЕ ФАЙЛА

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
        return res.status(200).json({docReq})       //! Добавить doc
    }


    //* ПОЛУЧИТЬ ВСЕ ЗАЯВКИ ПО ID ПОЛЬЗОВАТЕЛЯ (АДМИНКА) GET 
    //* /file_sharing/docs/getDocsByUserId
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

    //* ПОЛУЧИТЬ СВОИ ЗАЯВКИ (ПО ТОКЕНУ) (ДЛЯ ПОЛЬЗОВАТЕЛЯ) GET 
    //* /file_sharing/docs/getDocs
    async getUserDocs (req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Пользователь не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const userID = decoded.id
        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        const userDocs = await docReq.findOne({where: {user_id:userID}})
        return res.status(200).json({userDocs})
    }
}

module.exports = new DocController()