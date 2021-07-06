const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const User = require('./model_user')
const Docs = require('./docModel')

    const DocRequest = sequelize.define('docrequest', {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        type: {type: DataTypes.INTEGER,required: true},

        user_id: {type: DataTypes.INTEGER, required: true, references: {   
            model: User,
            key: "id"
            }
        },

        file_id: {
            type: DataTypes.ARRAY(
                {
                    type: DataTypes.INTEGER, required: true, references: {   
                        model: Docs,
                        key: "id"
                    }
                }
            )
        },

        date : { type: DataTypes.DATE, required: true},
        processed: {type: DataTypes.BOOLEAN,default: false },   //в процессе или нет
        status: {type: DataTypes.INTEGER,default: 0}            //статус выполнения
    })

module.exports = DocRequest;

