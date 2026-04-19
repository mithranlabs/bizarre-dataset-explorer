require('dotenv').config(); // Must be first — loads .env before anything else
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());          // Allow cross-origin requests from React (port 3000)
app.use(express.json()); // Parse incoming JSON request bodies

// Routes
app.use('/api/datasets', require('./routes/datasets'));

// Root health check
app.get('/', (req, res) => res.send('Bizarre Dataset Explorer API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));