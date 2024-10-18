const { DataTypes } = require("sequelize");
const sequelize = require("../database/conecction");
const Orden = require("./orden");
const Direccion = require("./direccion");

const Empleado = sequelize.define('Empleado', {
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
    tableName: 'empleados',
    timestamps: false
});

// one to one empleado y dirección
Empleado.hasOne(Direccion, {
    foreignKey: {
        name: 'empleado_id',
        allowNull: false
    }
    
});
Direccion.belongsTo(Empleado, {
    foreignKey: {
        name: 'empleado_id'
    }
});

// one to many empleado y orden
Empleado.hasMany(Orden, {
    foreignKey: 'empleado_id'
});
Orden.belongsTo(Empleado, {
    foreignKey: {
        name: 'empleado_id'
    }
});

module.exports = Empleado;