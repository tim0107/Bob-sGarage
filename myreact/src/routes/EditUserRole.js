const express = require('express');
const Model = require('../models/userModel'); 
const router = express.Router();

// Get all users
console.log('Admin endpoint hit');

router.get('/', async (req, res) => {
    try {
        const findAllUsers = await Model.findAll({});
        res.status(200).json(findAllUsers);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const findOneUser = await Model.findOne({ where: { id } });
        if (findOneUser) {
            res.status(200).json(findOneUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const [updated] = await Model.update(body, { where: { id } });
        if (updated) {
            const updatedUser = await Model.findOne({ where: { id } });
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await Model.destroy({ where: { id } });
        if (deleteUser) {
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
