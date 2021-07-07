const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Chat = require('./chatModel')
 
const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    chat_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: Chat,
            key: "id"
        }
    },
    user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: User,
            key: "id"
        }
    },
    author_id: {type: DataTypes.INTEGER, required: true, references: {   
        model: User,
        key: "id"
        }
    },

    text : { type: DataTypes.STRING, required: true},
    date : { type: DataTypes.DATE, required: true}

})

module.exports = Message;