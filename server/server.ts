// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const db = require('./database/db'); // Postgres connection

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON request bodies
app.use(cors()); // CORS support for cross-origin requests

// Connect to the database
db.connect();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
