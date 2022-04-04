const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD, {
    host: process.env.SERVER,
    port: 3306,
    dialect: 'mysql',
    debug: true
})

module.exports = sequelize;