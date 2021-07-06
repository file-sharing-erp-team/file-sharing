const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./model_chat')
 
const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    chat_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: "chat",
            key: "id"
        }
    },
    user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: "user",
            key: "id"
        }
    },
    author_id: {type: DataTypes.INTEGER, required: true, references: {   
        model: "user",
        key: "id"
        }
    },
    text : { type: DataTypes.STRING, required: true},
    date : { type: DataTypes.DATE, required: true}

})

module.exports = Message;