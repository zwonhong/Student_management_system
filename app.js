const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use('/api', studentRoutes);

// This is for testing the server is running
app.get('/', (req, res) => {
  res.send('Student Management System API is running!');
});

module.exports = app;