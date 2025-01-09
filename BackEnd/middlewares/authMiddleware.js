const jwt = require("jsonwebtoken");

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authorization header is missing or malformed" });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Access token is missing" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach the userId to the request object
    req.userId = decoded.userId;

    next();
  } catch (err) {
    const message = err.name === "TokenExpiredError" ? "Token has expired" : "Invalid token";
    return res.status(401).json({ message });
  }
};

module.exports = authenticateUser;
