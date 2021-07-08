const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./chatModel')
 
const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    chat_id: {type: DataTypes.INTEGER, required: true
    },
    user_id: {type: DataTypes.INTEGER, required: true
    },
    author_id: {type: DataTypes.INTEGER, required: true
    },

    text : { type: DataTypes.STRING, required: true},
    

})

module.exports = Message;