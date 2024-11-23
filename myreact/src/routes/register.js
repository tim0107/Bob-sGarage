const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel'); 
const router = express.Router();

router.post('/', async (req, res) => {
    console.log('Register endpoint hit');

    const { username, password, email, role } = req.body;

    try {
        const hashedPwd = await bcrypt.hash(password, 10);
        const newUser = await User.create({ 
            username: username, 
            password: hashedPwd,
            email: email,
            role: role
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (err) {
        console.error('Error during registration:', err);
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(409).json({ message: 'Username or email taken' });
        } else {
            res.status(500).json({ message: 'Registration failed', error: err.message });
        }
    }
});


module.exports = router;
