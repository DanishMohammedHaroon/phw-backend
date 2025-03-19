import knex from "../db/knex.js";

export const getPhysiotherapists = async (_req, res) => {
  try {
    // Query users table for physiotherapists
    const physios = await knex("users")
      .where({ role: "physio_therapist" })
      .select("id", "name", "email");
    return res.status(200).json(physios);
  } catch (error) {
    console.error("Error fetching physiotherapists:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPhysiotherapistById = async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch the user from the "users" table with the given id and ensure the role is 'physio_therapist'
    const physio = await knex("users")
      .where({ id, role: "physio_therapist" })
      .first();

    if (!physio) {
      return res.status(404).json({ message: "Physiotherapist not found." });
    }

    return res.status(200).json(physio);
  } catch (error) {
    console.error("Error fetching physiotherapist:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};