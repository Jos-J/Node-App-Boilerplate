const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

// ✅ Call the DB connection function
connectDB();

// ✅ Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// ✅ Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ✅ Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

// ✅ User API routes
app.use('/api/user', userRoutes); // <-- must be a valid Express router

module.exports = app;
