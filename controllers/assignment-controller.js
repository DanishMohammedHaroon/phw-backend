import knex from "../db/knex.js";

export const createAssignment = async (req, res) => {
  const {
    physiotherapistId,
    patientId,
    exerciseId,
    repetitions,
    sets,
    difficulty,
    instructions,
  } = req.body;

  if (!physiotherapistId || !patientId || !exerciseId) {
    return res
      .status(400)
      .json({
        message: "physiotherapistId, patientId, and exerciseId are required.",
      });
  }

  try {
    const [id] = await knex("assignments").insert({
      physiotherapistId,
      patientId,
      exerciseId,
      repetitions,
      sets,
      difficulty,
      instructions,
    });

    const newAssignment = await knex("assignments").where({ id }).first();
    return res
      .status(201)
      .json({
        message: "Assignment created successfully",
        assignment: newAssignment,
      });
  } catch (error) {
    console.error("Error creating assignment:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAssignments = async (req, res) => {
  try {
    const assignments = await knex("assignments").select("*");
    return res.status(200).json(assignments);
  } catch (error) {
    console.error("Error retrieving assignments:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};