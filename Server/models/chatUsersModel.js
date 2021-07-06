const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./model_chat')
 
 
const ChatUser = sequelize.define('chat_user',  {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    chat_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: Chat,
            key: "id"
        }
    },
    author_id: {type: DataTypes.INTEGER, required: true, references: {   
        model: User,
        key: "id"
        }
    },
    user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: User,
            key: "id"
        }
    }
})

module.exports = ChatUser;