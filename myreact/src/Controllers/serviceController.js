const Model = require("../models/serviceModel");

const getAllService = async ( req,res) => {
    try {
        const findAll = await Model.findAll({});
        res.status(200).json(findAll) 
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

const getOneService = async ( req,res) => {
    try {
        const {id} = req.params;
        const find = await Model.findOne({where : {id}});
        res.status(200).json(find)
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const createService = async (req,res) => {
    try {
        const {name,description,price} = req.body;

        if (!name || !description || !price) {
            return res.status(400).json({ message: 'The field are required.' });
        }

        const create = await Model.create(req.body)
        if (create) {
            res.status(200).json({ message: 'Service created successfully' });
        } else {
            res.status(404).json({ message: 'Not successfully' });
        }
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

const updateService = async (req, res) => {
    try {
        // Extracting the id from request parameters and the new data from request body
        const { id } = req.params;  // This gets the 'id' from the URL, like '/blogs/:id'
        const body = req.body;         // This gets the new data from the request body

        // Using the Sequelize 'update' method to update the blog
        // 'body' contains the fields you want to update and their new values
        // 'where: { id }' ensures that only the blog with the matching 'id' is updated
        const [updated] = await Model.update(body, { where: { id } });

        if (updated) {
            // If 'updated' is truthy, it means the update was successful
            // Fetch the updated blog to send it back in the response
            const updatedBlog = await Model.findOne({ where: { id } });
            res.status(200).json(updatedBlog);  // Respond with the updated blog data
        } else {
            // If no rows were updated (updated is 0), the blog was not found
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        // Handle any errors that occur during the process
        res.status(500).json({ message: error.message });
    }
};


const deleteService = async(req,res) => {
    try {
    const {id} = req.params;
    const deleteBlog = await Model.destroy({where : {id}});
    if (deleteBlog) {
        res.status(200).json({ message: 'Service deleted successfully' });
    } else {
        res.status(404).json({ message: 'Service not found' });
    }


    } catch (error) {
        res.status(500).json({message: error.message});
    }
};





module.exports = {
    getAllService,
    getOneService,
    updateService,
    deleteService,
    createService
}