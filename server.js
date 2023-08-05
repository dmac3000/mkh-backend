const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors module
const authRoutes = require('./routes/authRoutes');
require('dotenv').config()

const app = express();
app.use(cors()); // Use the cors middleware
app.use(express.json());
app.use('/api', authRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));


// We've changed the port number to be set from the environment variable
const port = process.env.PORT || 3333;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;
