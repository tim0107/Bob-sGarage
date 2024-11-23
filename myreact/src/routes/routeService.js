// routes/blogRoutes.js
const express = require('express');
const { getAllService, getOneService, updateService, deleteService,createService } = require('../Controllers/serviceController'); 

const router = express.Router();

// Route to get all blogs
router.get('/', getAllService);
console.log('services endpoint hit');


// Route to get a specific blog by ID
router.get('/:id', getOneService);

// Route to update a specific blog by ID
router.put('/:id', updateService);

// Route to delete a specific blog by ID
router.delete('/:id',deleteService);

router.post('/', createService);


module.exports = router; //CommonJS
