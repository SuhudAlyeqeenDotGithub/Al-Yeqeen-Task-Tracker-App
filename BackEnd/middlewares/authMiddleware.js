// bring in jwt
const jwt = require("jsonwebtoken");
const User = require("../mongooseModels/userModel");

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader === "") {
    res.status(401);
    return next(new Error("Authorization header is missing in the request"));
  }

  const token = authHeader.split("Bearer ")[1];

  if (!token) {
    res.status(401);
    return next(new Error("User access token is not found"));
  }

  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.userId;
    res.status(200);

    next();
  } catch (err) {
    return next(new Error("Token is invalid"));
  }
};

module.exports = authenticateUser;
