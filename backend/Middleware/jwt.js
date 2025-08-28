const jwt = require("jsonwebtoken");

const VerifiedToken = (req, res, next) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).send("Token not found!");

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(403).send("Invalid Token!");

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
  });
};

module.exports = VerifiedToken;
