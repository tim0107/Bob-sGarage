// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// // Path to your actual SQLite database file
// const dbPath = path.resolve(__dirname, '../Data/db.db'); 

// const db = new sqlite3.Database(dbPath, (err) => {
//     if (err) {
//         console.error('Error connecting to SQLite database:', err.message);
//     } else {
//         console.log('Connected to SQLite database');
//     }
// });

// module.exports = db;


// src/Config/db.js
const { Sequelize } = require('sequelize');
const path = require('path');

// Setup Sequelize instance
const db = new Sequelize({
    dialect: 'sqlite',
    storage: path.resolve(__dirname, '../Data/db.db'), // Adjust this path to your SQLite file location
});

module.exports = db;
