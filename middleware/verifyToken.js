import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  // Retrieve the token from the Authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  // The token should be in the format "Bearer <token>"
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  // Verify the token using the secret key from your .env file
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
 
    req.user = decoded;
    next(); 
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default verifyToken;
