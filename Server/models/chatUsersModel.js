const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./model_chat')
 
 
const ChatUser = sequelize.define('chat_user',  {
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
    }
})

return ChatUser;