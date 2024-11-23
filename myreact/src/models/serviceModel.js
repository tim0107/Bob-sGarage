// src/models/model.js
// this will hold all the models for our data base
// this will create if they do not exits

//this will allow us to use SQL as a function for our SQL database
// we need this package to initialize our database and create models for our table

const {Sequelize, DataTypes} = require('sequelize');


const db = require('../Config/db'); // Import the SQLite connection from db.js
const { type } = require('@testing-library/user-event/dist/type');

// Define your model using Sequelize, if needed
const Service = db.define('service', {
    id: {
        type: DataTypes.INTEGER,  
        autoIncrement: true,      
        primaryKey: true,         
    },
    
    name: {
        type: DataTypes.TEXT,   
        allowNull: false          
    },
    description: {
        type: DataTypes.TEXT,   
        allowNull: false 
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false

    }
 }, {
    tableName: 'service', 

    timestamps: false,
 });
 
 module.exports = Service;
 

