// this file will hold all of the configurations for our server
// create an export and this will allow us to import our config and use it else where in our applications

    // Note: process.env.<var_name> will check for an environmental variable with the name that
    // is specified after .env.

    require('dotenv').config();

    module.exports = {
        port: process.env.PORT || 3001,
        db: {
            database: process.env.DB_NAME || 'feedbackapp',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || 'root',
            options: {
                dialect: process.env.DIALECT || 'sqlite',
                host: process.env.HOST || 'localhost',
                storage: './data/database.sqbpro'
            }
        }
    };
    