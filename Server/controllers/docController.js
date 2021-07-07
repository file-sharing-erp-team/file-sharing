const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')
const uuid = require('uuid')
const sequelize = require('../db')
const cF =  require('../utils/createDocx')

//const DIR = path.join(__dirname, '/files').toString()


class DocController {

    //* СОЗДАТЬ ЗАЯВКУ PUT
    //* /file_sharing/docs/create
    //TODO ПРИВЯЗАТЬ СОЗДАНИЕ И СОХРАНЕНИЕ ФАЙЛА

    async createDoc (req,res,next) {
        
        const {type , userID, firstName, lastName, middleName, phone, group} = req.body
        if (!type || !userID || !firstName || !lastName || !middleName ||!phone ||!group) {
            return next(ApiError.badRequest('Некорректные данные'))
        }

        const files = req.files.files
        console.log(files)
       
        
        if(!files) {
             return next(ApiError.badRequest('Файлы отсутствуют'))
        }


        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }

       let doc;

        const docReq = await DocReq.create({type:type, user_id:checkUser.id}) //заполняем docRequest 
        
        for(let i = 0; i < files.length; i++) {
            const file = files[i]
            const fname = checkUser.id + '_' + uuid.v4() + '.jpg'

            const route = `http://localhost:5000/files${fname}`
    
            file.mv(`files/` + fname, function(err) {
                if(err) {
                    return next(ApiError.internal('Ошибка сохранения файла'))
                }
            })
             doc = await Doc.create({file_name:fname, src:route, author_id:checkUser.id, reqId: docReq.id})
        }
        cF.create("hui")
        return res.status(200).json({docReq, doc})       
    }


    //* ПОЛУЧИТЬ СВОИ ЗАЯВКИ (ПО ТОКЕНУ) (ДЛЯ ПОЛЬЗОВАТЕЛЯ) GET 
    //* /file_sharing/docs/getDocs
    async getUserDocs (req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Токен не валиден"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const userID = decoded.id
        const checkUser = await User.findOne({where: {id:userID}})
        if (!checkUser) {
            return next(ApiError.badRequest('Пользователя не существует'))
        }
        const userDocs = await DocReq.findOne({where: {user_id:userID}})
        return res.status(200).json({userDocs})
    }
}

module.exports = new DocController()