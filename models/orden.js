const { DataTypes } = require("sequelize");
const sequelize = require("../database/conecction");

const Orden = sequelize.define('Orden', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    }, 
    fecha: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'ordenes',
    timestamps: false
});

module.exports = Orden;