const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
 
 
const Doc = sequelize.define('doc', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    file_name: { type: DataTypes.STRING, required: true, unique: true},
    src: {type: DataTypes.STRING, required: true },
    author_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: User,
            key: "id"
        }
    },
    reqId:{type: DataTypes.INTEGER, required: true},
    upload_date: {type: DataTypes.DATE, required: true },
    type: {type: DataTypes.STRING, required: false },
    processed: {type: DataTypes.BOOLEAN,default: false }
})

module.exports = Doc;