const { json } = require('sequelize');
const Model = require('../models/feedbackModel');

const getAllFeedbacks = async (req, res) => {
    try {
        const findAll = await Model.findAll({});
        console.log("Fetched data:", findAll); // Log the fetched data

        if (findAll.length > 0) {
            res.status(200).json(findAll);
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        console.error("Error fetching data:", error.message);
        res.status(500).json({ message: error.message });
    }
};


const getOneFeedback = async (req,res) => {
    try {
        const {id} = req.params;
        const find = await Model.findOne({where : {id}});
        res.status(200).json(find)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const createFeedback = async (req, res) => {
    try {
        const { username, content } = req.body;

        if (!username || !content) {
            return res.status(400).json({ message: 'Username and content are required.' });
        }

        // Proceed with creating the feedback (created_at will be auto-set by Sequelize)
        const newFeedback = await Model.create({
            username,
            content,
            // `created_at` will automatically be set by Sequelize, no need to include it in the body
        });

        if (newFeedback) {
            return res.status(201).json({ message: 'Feedback created successfully', newFeedback });
        } else {
            return res.status(400).json({ message: 'Failed to create feedback.' });
        }
    } catch (error) {
        console.error('Error creating feedback:', error.message);
        return res.status(500).json({ message: error.message });
    }
};

const updateFeedback = async (req,res) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const [updated] = await Model.update(body, {where:{id}});
        if (updated) {
            // If 'updated' is truthy, it means the update was successful
            // Fetch the updated blog to send it back in the response
            const updatedFeedback = await Model.findOne({ where: { id } });
            res.status(200).json(updatedFeedback);  // Respond with the updated blog data
        } else {
            // If no rows were updated (updated is 0), the blog was not found
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const deleteFeedbacks = async (req,res) => {
    try {
        const {id} = req.params;
        const deleted = await Model.destroy({where: {id}});
        if (deleted) {
            res.status(200).json({ message: 'Feedback deleted successfully' });
        } else {
            res.status(404).json({ message: 'Feedback not found' });
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getAllFeedbacks,
    getOneFeedback,
    updateFeedback,
    deleteFeedbacks,
    createFeedback
}