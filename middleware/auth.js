const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  
  console.log('Authorization header:', authorization); // Log the Authorization header
  
  if (!authorization) {
    return res.status(401).send('No authorization token found');
  }

  const token = authorization.replace('Bearer ', '');
  
  console.log('Token:', token); // Log the token
  
  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
    
    console.log('Decoded token:', decodedToken); // Log the decoded token
    
    if (err) {
      console.log('JWT verification error:', err); // Log the error
      return res.status(401).send('Invalid authorization token');
    }
    
    const user = await User.findById(decodedToken.userId);
    
    console.log('User:', user); // Log the user
    
    if (!user) {
      return res.status(401).send('User not found');
    }

    req.user = user; // Add user to request object
    req.userId = decodedToken.userId;
    next();
  });
};
