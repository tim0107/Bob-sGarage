// routes/blogRoutes.js
const express = require('express');
const { getAllBlogs, getOneBlogs, updateBlogs, deleteBlogs,createBlog } = require('../Controllers/blogController'); // Adjust the path based on your project structure

const router = express.Router();

// Route to get all blogs
router.get('/', getAllBlogs);
console.log('blog endpoint hit');

// Route to get a specific blog by ID
router.get('/:id', getOneBlogs);

// Route to update a specific blog by ID
router.put('/:id', updateBlogs);

// Route to delete a specific blog by ID
router.delete('/:id', deleteBlogs);

router.post('/', createBlog);


module.exports = router; // Export using CommonJS
