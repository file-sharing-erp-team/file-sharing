const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./chatModel')
 
const Notification = sequelize.define('notification', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    type: {type: DataTypes.INTEGER, required: true
    },
    user_id: {type: DataTypes.INTEGER, required: true
    },
    text : { type: DataTypes.STRING, required: true},
    checked: { type: DataTypes.BOOLEAN, default: false},
    link: { type: DataTypes.STRING, required: true}
})

module.exports = Notification;