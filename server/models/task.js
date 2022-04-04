
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const taskSchema = sequelize.define('taskSchema', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true
    },
    task: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    note: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

module.exports = taskSchema;