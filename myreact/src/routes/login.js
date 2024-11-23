const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/', async (req, res) => {
    console.log('login endpoint hit');

    const { username, password } = req.body;

    function generateAccessToken(user) {
        return jwt.sign(
            { username: user.username, role: user.role }, 
            'your_jwt_secret', 
            { expiresIn: '1h' } 
        );
    }

    try {
        const user = await User.findOne({ where: { username: username } });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }



        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const userRole = user.role;
        const accessToken = generateAccessToken(user);


        res.status(200).json({
            message: 'Logged in successfully', user:
            {
                username: user.username,
                role: userRole,
            },
            accessToken: accessToken

        });

        console.log(user)
        console.log(user.role)



    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
});


module.exports = router;