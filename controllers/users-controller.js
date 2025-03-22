import knex from "../db/knex.js";

//GET all users
export const getAllUsers = async (_req, res) => {
  try {
    const users = await knex("users").select("*");
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET users filtered as clients
export const getClients = async (_req, res) => {
  try {
    const clients = await knex("users").where({ role: "client" }).select("*");
    return res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
