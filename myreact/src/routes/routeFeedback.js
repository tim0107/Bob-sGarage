// routes/blogRoutes.js
const express = require('express');
const { getAllFeedbacks, getOneFeedback, updateFeedback, deleteFeedbacks , createFeedback} = require('../Controllers/feedbackController'); // Adjust the path based on your project structure

const router = express.Router();

// Route to get all blogs
router.get('/', getAllFeedbacks);  // Note: the path is '/' since it's mounted on '/api/feedback'


console.log('feedback endpoint hit');

// Route to get a specific blog by ID
router.get('/:id', getOneFeedback);

// Route to update a specific blog by ID
router.put('/:id', updateFeedback);

// Route to delete a specific blog by ID
router.delete('/:id',deleteFeedbacks);

router.post('/', createFeedback);


module.exports = router; // Export using CommonJS
