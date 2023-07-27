const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorisation } = req.headers;
  if (!authorisation) {
    return res.status(401).send('No authorisation token found');
  }

  const token = authorisation.replace('Bearer ', '');
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(401).send('Invalid authorisation token');
    }
// Add secret key later, get sendgrid email
    req.userId = payload.userId;
    next();
  });
};