const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    login: {type: DataTypes.STRING, required: true, unique: true},
    password: {type: DataTypes.STRING, required: true},
    group: {type: DataTypes.STRING, required: true},
    first_name: {type: DataTypes.STRING, required: true},
    middle_name: {type: DataTypes.STRING, required: true},
    last_name: {type: DataTypes.STRING, required: true},
    role: {type: DataTypes.INTEGER, required: true, defaultValue:0},
    phone: {type: DataTypes.STRING, required: true},
})

module.exports = User