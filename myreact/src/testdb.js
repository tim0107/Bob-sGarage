// server/testDb.js

const db = require('./Config/db'); // Import Sequelize instance from your db.js file
const Blog = require('./models/blogModel'); // Import your Blog model

// Function to test the database connection and fetch data
const testDbConnection = async () => {
    try {
        // Test the database connection
        await db.authenticate();
        console.log('Connection has been established successfully.');

        // Sync the model to ensure tables are created if they don't exist
        await db.sync(); 
        console.log('Database synchronized.');

        // Perform a test query to fetch titles from the blogs table
        const blogs = await Blog.findAll({
            attributes: ['title'] // Fetch only the title column
        });

        console.log('Data fetched successfully:');
        console.log(blogs.map(blog => blog.toJSON())); // Log the fetched data in JSON format

    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    } finally {
        // Close the database connection
        await db.close()
            .then(() => console.log('Database connection closed.'))
            .catch(err => console.error('Error closing the database connection:', err.message));
    }
};

// Run the test function
testDbConnection();




    // "build": "react-scripts build",
    //    "start": "react-scripts start",
