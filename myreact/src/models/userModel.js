// src/models/model.js
// this will hold all the models for our data base
// this will create if they do not exits

//this will allow us to use SQL as a function for our SQL database
// we need this package to initialize our database and create models for our table

const {Sequelize, DataTypes} = require('sequelize');


const db = require('../Config/db'); // Import the SQLite connection from db.js
const { type } = require('@testing-library/user-event/dist/type');

const users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,  
        autoIncrement: true,      
        primaryKey: true,         
    },
    username: {
        type: DataTypes.TEXT,   
        allowNull: false          
    },
    email: {
        type: DataTypes.TEXT,   
        allowNull: true 
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    role:{
        type: DataTypes.ENUM('user', 'admin'), 
        allowNull: false,
        defaultValue: 'user',
    }
}, {
    timestamps: false  // Disable the automatic createdAt and updatedAt columns
});

module.exports = users;
