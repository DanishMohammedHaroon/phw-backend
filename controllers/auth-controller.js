// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import fileStorage from "../utils/file-storage.js"

// dotenv.config();

// // Dummy in-memory storage for demonstration
// const users = [];

// const register = (req, res) => {
//   const { name, email, password, role } = req.body;

//   // Basic validation
//   if (!name || !email || !password || !role) {
//     return res.status(400).json({ message: "All fields are required." });
//   }

//   // Check if user already exists
//   const existingUser = users.find((user) => user.email === email);
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists." });
//   }

//   // Create new user (in a real app, hash the password and save in a database)
//   const newUser = { id: users.length + 1, name, email, password, role };
//   users.push(newUser);

//   return res
//     .status(201)
//     .json({ message: "User registered successfully", user: newUser });
// };

// const login = (req, res) => {
//   const { email, password } = req.body;

//   // Validate input
//   if (!email || !password) {
//     return res
//       .status(400)
//       .json({ message: "Email and password are required." });
//   }

//   // Find user (in a real app, compare hashed password)
//   const user = users.find(
//     (user) => user.email === email && user.password === password
//   );
//   if (!user) {
//     return res.status(401).json({ message: "Invalid credentials." });
//   }

//   // Generate JWT
//   const token = jwt.sign(
//     { id: user.id, email: user.email, role: user.role },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "1h",
//     }
//   );

//   return res.status(200).json({ message: "Login successful", token, user });
// };

// // Optional: Profile retrieval (for token-verified requests)
// const getProfile = (req, res) => {
//   // Assuming token is verified and user info attached to req.user (middleware needed in a real app)
//   const { id } = req.user || {};
//   const user = users.find((user) => user.id === id);
//   if (!user) {
//     return res.status(404).json({ message: "User not found" });
//   }
//   return res.status(200).json({ user });
// };

// export default { register, login, getProfile };

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import fileStorage from "../utils/file-storage.js";
const { readUsers, writeUsers } = fileStorage;

dotenv.config();

// Register a new user and store data in users.json
const register = (req, res) => {
  const { name, email, password, role } = req.body;

  // Basic validation
  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  // Read existing users from the JSON file
  const users = readUsers();

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists." });
  }

  // Create new user (in a real app, hash the password)
  const newUser = { id: users.length + 1, name, email, password, role };
  users.push(newUser);

  // Write updated users back to the file
  writeUsers(users);

  return res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};

// Log in a user by checking against data in users.json
const login = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  // Read users from the file
  const users = readUsers();

  // Find user (in a real app, compare hashed password)
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials." });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.status(200).json({ message: "Login successful", token, user });
};

// Retrieve a user's profile; token verification middleware is required in a real app
const getProfile = (req, res) => {
  // Assuming token verification middleware attaches the user info to req.user
  const userId = req.user?.id;
  const users = readUsers();
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json({ user });
};

export default { register, login, getProfile };