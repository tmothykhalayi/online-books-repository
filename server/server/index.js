
const express = require('express');
const { Client } = require('pg');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection setup
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'your_username',    // Change to your PostgreSQL username
  password: 'your_password', // Change to your PostgreSQL password
  database: 'online_platform' // Change to your PostgreSQL database name
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Failed to connect to PostgreSQL', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Online Bookstore!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

