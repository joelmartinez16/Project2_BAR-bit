const Sequelize = require("sequelize");
const { Model, DataTypes } = Sequelize;
const sequelize = require("../../Configuration/connection")
//const data= require("./index.js")

class Session extends Model {

}

Session.init(
    {
        sid: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        expires: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        data: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'createdAt',
            defaultValue: Sequelize.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updatedAt',
            defaultValue: Sequelize.NOW,
        }
    },


    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Session',

    }

);

module.exports = { Session };