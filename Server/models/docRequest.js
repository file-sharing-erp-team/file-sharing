const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')

    const DocRequest = sequelize.define('docrequest', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: "user",
            key: "id"
        }
    },
        date : { type: DataTypes.DATE, required: true},
        processed: {type: DataTypes.BOOLEAN,default: false }
    })

return DocRequest;

