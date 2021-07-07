const sequelize = require('../db')
const User = require('./model_user')
const {DataTypes} = require('sequelize')
 
const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    chat_name: { type: DataTypes.STRING, required: true, unique: false},
    author_id: {type: DataTypes.INTEGER, required: true, references: {   
        model: User,
        key: "id"
        }
    },
    user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: User,
            key: "id"
        }
    },
    last_message: { type: DataTypes.STRING, unique: false}
})

module.exports = Chat;