const express = require('express');
const cors = require('cors');
const blogRoutes = require('./routes/routeBlogs'); 
const feedbackRoutes = require('./routes/routeFeedback');
const serviceRoutes = require('./routes/routeService');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login')
const adminRoute = require('./routes/EditUserRole');

const app = express();

// Use middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true // If your backend needs to allow credentials (cookies, etc.)
}));
app.use(express.json()); // Parse JSON bodies

// Mount routes
app.use('/api/blogs', blogRoutes); 
app.use('/api/feedbacks', feedbackRoutes); 
app.use('/api/services', serviceRoutes); 
app.use('/api/register', registerRoute); 
app.use('/api/login', loginRoute)
app.use('/api/admin',adminRoute);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
