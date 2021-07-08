require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
//const user = require('./models/model_user')
const cors = require('cors')
const router = require('./routes/mergeRoutes')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const fileUpload = require('express-fileupload')
const cF =  require('./utils/createDocx')
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/file_sharing', router)
app.get('/', function(req, res){
    cF.create("Дмитриев Максим Сергеевич", "ИС-Б18", "3", "79682852676", "3000", "Хочу", "27.01.2001", "15")
    res.send("s")
})


//!Обработка ошибок, последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=>console.log('App has been started on port:', PORT))

    } catch (e) {
        console.log(e)
    }
}

start()
