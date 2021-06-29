// Create table if not exists bars(  
//     id int auto_increment not null , 
//     bars_name varchar(40), 
//     rating int not null , 
//     pricing enum('10','20', '30', '40', '50'),
//     hours varchar(40),
//     reservations varchar (40),
//     review varchar(40),
//     primary key(id) 
//     );

const Sequelize = require("sequelize");
const { Model, DataTypes } = Sequelize;
const sequelize = require("../Configuration/connection")
const data= require("./index.js")

class Bar extends Model {

}

Bar.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        bars_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: Math.ceil(Math.random() * 5)
        },

        pricing: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20
        },

        hours: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "all the time"
        },

        reservation: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "no need"
        },

        reviews: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        day_of_week: {
            type: DataTypes.STRING,
            allowNull: false,

        },


    },

    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Bars',

    }

);

module.exports = Bar;

