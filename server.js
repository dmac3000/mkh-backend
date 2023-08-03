const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module
const authRoutes = require('./routes/authRoutes');
require('dotenv').config()

const app = express();
app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use('/api', authRoutes);

mongoose.connect('mongodb://localhost:27017/myKitchenHyrules', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
