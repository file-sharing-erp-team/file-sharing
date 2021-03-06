const ApiError = require('../error/error')
const jwt = require('jsonwebtoken')
const Doc = require('../models/docModel')
const DocReq = require('../models/docRequest')
const User = require('../models/model_user')
const uuid = require('uuid')
const sequelize = require('../db')
const cF =  require('../utils/createDocx')
const Notification = require('../models/notificationModel')

//const DIR = path.join(__dirname, '/files').toString()

class DocController {

    //* СОЗДАТЬ ЗАЯВКУ PUT
    //* /file_sharing/docs/create
    //TODO ПРИВЯЗАТЬ СОЗДАНИЕ И СОХРАНЕНИЕ ФАЙЛА

    async createDoc (req,res,next) {
        console.log(req.body)
        const {type , userID, firstName, lastName, middleName, phone, group, course} = req.body
        if (!type || !userID || !firstName || !lastName || !middleName ||!phone ||!group ||!course) {
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

        const docReq = await DocReq.create({type:type, user_id:checkUser.id, status: 1}) //заполняем docRequest 
        
        for(let i = 0; i < files.length; i++) {
            const file = files[i]
            const fname = checkUser.id + '_' + uuid.v4() + '.jpg'

            const route = `http://localhost:5000/files/${fname}`
    
            file.mv(`files/` + fname, function(err) {
                if(err) {
                    return next(ApiError.internal('Ошибка сохранения файла'))
                }
            })
            doc = await Doc.create({file_name:fname, src:route, author_id:checkUser.id, reqId: docReq.id})
        }
        if(type === '1') {
            const newFile = cF.create(`${checkUser.last_name} ${checkUser.first_name} ${checkUser.middle_name}`,`${checkUser.group}`, `${course}`, `${checkUser.phone}`, "5000", "reason", "date", "13")
            const route = `http://localhost:5000/files/${newFile}`
            const newDoc = await Doc.create({file_name:newFile, src:route, author_id:checkUser.id, reqId: docReq.id})
            const notify = await Notification.create({type: 1, user_id: checkUser.id, text: 'Зявление на мат. помощь. отправлено', checked: false, link: `/info/${docReq.id}`})
            return res.status(200).json({docReq, doc}) 
        }
        else if(type === '2') {
            const newFile = cF.createMoney(`${course}`,`${checkUser.group}`,`${checkUser.last_name} ${checkUser.first_name} ${checkUser.middle_name}`, "date")
            const route = `http://localhost:5000/files/${newFile}`
            const newDoc = await Doc.create({file_name:newFile, src:route, author_id:checkUser.id, reqId: docReq.id})
            const notify = await Notification.create({type: 1, user_id: checkUser.id, text: 'Зявление на повышенную стипендию отправлено', checked: false, link: `/info/${docReq.id}`})
            return res.status(200).json({docReq, doc}) 
        }
        

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
        const userDocs = await DocReq.findAll({where: {user_id:userID}})
        return res.status(200).json({userDocs})
    }

    //* ПОЛУЧИТЬ ЗАЯВКУ ПО ID GET 
    //* /file_sharing/docs/getDocReq/:id
    async getById (req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Токен не валиден"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const reqId = req.params.id
        const checkDoc = await DocReq.findOne({where: {id: reqId}})
        if (!checkDoc) {
            return next(ApiError.badRequest('Документ не найден'))
        }
        
        return res.status(200).json({checkDoc})
    }

    
    //* ПОЛУЧИТЬ СПИСОК ДОКУМЕНТОВ ЗАЯВКИ ПО ID
    //* /file_sharing/docs/getDocById/:id
    async getDocById (req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            return res.status(401).json({message: "Токен не валиден"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const reqId = req.params.id
        const checkDoc = await Doc.findAll({where: {reqId: reqId}})
        if (!checkDoc) {
            return next(ApiError.badRequest('Документ не найден'))
        }
        
        return res.status(200).json({checkDoc})
    }
}

module.exports = new DocController()