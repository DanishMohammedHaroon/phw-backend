import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import knex from "../db/knex.js";

dotenv.config();

const register = async (req, res) => {
  // Now also destructuring physiotherapistId from the request body
  const { name, email, password, role, physiotherapistId } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await knex("users").where({ email }).first();
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }


    const [id] = await knex("users").insert({
      name,
      email,
      password,
      role,
      physiotherapistId: role === "client" ? physiotherapistId : null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const newUser = await knex("users").where({ id }).first();

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        physiotherapistId: newUser.physiotherapistId,
      },
    });
  } catch (error) {
    console.error("Error in registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }

  try {
    const user = await knex("users").where({ email, password }).first();
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        physiotherapistId: user.physiotherapistId,
      },
    });
  } catch (error) {
    console.error("Error in login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProfile = async (req, res) => {
  const userId = req.user?.id;
  if (!userId) {
    return res.status(400).json({ message: "User ID not provided in token." });
  }

  try {
    const user = await knex("users").where({ id: userId }).first();
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        physiotherapistId: user.physiotherapistId,
      },
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default { register, login, getProfile };
