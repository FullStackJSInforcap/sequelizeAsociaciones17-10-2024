const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://postgres:root@127.0.0.1:5432/asociaciones');

module.exports = sequelize;