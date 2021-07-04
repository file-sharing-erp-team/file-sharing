const sequelize = require('../db')
const {DataTypes} = require('sequelize')
 
const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    chat_name: { type: DataTypes.STRING, required: true, unique: false}
})

module.exports = Chat;