const { DataTypes } = require("sequelize");
const sequelize = require("../database/conecction");
const Direccion = require("./direccion");
const Orden = require("./orden");

const Cliente = sequelize.define('Cliente', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'clientes',
    timestamps: false
});

// one to one entre cliente y dirección
Cliente.hasOne(Direccion, {
    foreignKey: {
        allowNull: false,
        name: 'cliente_id'
    }
});
Direccion.belongsTo(Cliente, {
    foreignKey: {
        name: 'cliente_id'
    }
});

// one to many entre cliente y orden
Cliente.hasMany(Orden, {
    foreignKey: 'cliente_id'
});
Orden.belongsTo(Cliente, {
    foreignKey: {
        name: 'cliente_id'
    }
});

module.exports = Cliente;