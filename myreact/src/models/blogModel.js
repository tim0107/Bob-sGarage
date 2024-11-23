// src/models/blogModel.js

const { Sequelize, DataTypes } = require('sequelize');
const db = require('../Config/db'); // Import the SQLite connection from db.js

// Define your model using Sequelize
const blogs = db.define('blogs', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    author: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: false, 
});

module.exports = blogs;

