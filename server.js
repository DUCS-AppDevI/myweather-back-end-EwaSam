// main server file
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const auth = require('./api/auth'); // Import the authentication route

const app = express();
const PORT = 3010;

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the authentication route
app.use('/', auth);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
