// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const patientRoutes = require('./routes/patientRoutes');
const gameRoutes = require('./routes/gameRoutes');
const doctorRoutes = require('./routes/doctorRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/patients', patientRoutes);
app.use('/games', gameRoutes);
app.use('/doctors', doctorRoutes);

// Ensure .env variables are loaded
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000; // Default to 5000 if no port is set

if (!MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in .env');
  process.exit(1); // Exit if MONGO_URI is missing
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
    process.exit(1); // Exit on error
  });
