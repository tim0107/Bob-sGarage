const { Sequelize, DataTypes } = require('sequelize');
const db = require('../Config/db');

const feedbacks = db.define('feedbacks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,  
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,  
    },
    blog_id: {
        type: DataTypes.INTEGER,
        allowNull: true,   
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,  
    }
}, {
    timestamps: false,  
});

module.exports = feedbacks;
