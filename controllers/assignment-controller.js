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
      created_at: new Date(),
      updated_at: new Date(),
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
    const { patientId } = req.query;
    let assignments;
    if (patientId) {
      // Fetch assignments only for the specified patient
      assignments = await knex("assignments").where({ patientId });
    } else {
      // If no patientId is provided, fetch all assignments (or you can return an error)
      assignments = await knex("assignments").select("*");
    }
    return res.status(200).json(assignments);
  } catch (error) {
    console.error("Error retrieving assignments:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateAssignmentProgress = async (req, res) => {
  const { id } = req.params;
  const { increment } = req.body; // For example, 1
  try {
    // Retrieve current progress
    const assignment = await knex("assignments").where({ id }).first();
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found." });
    }
    const currentProgress = assignment.completedSets || 0;
    const newProgress = Math.min(currentProgress + increment, assignment.sets);
    await knex("assignments").where({ id }).update({
      completedSets: newProgress,
      updated_at: new Date(),
    });
    const updated = await knex("assignments").where({ id }).first();
    return res
      .status(200)
      .json({ message: "Progress updated", assignment: updated });
  } catch (error) {
    console.error("Error updating progress:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteAssignment = async (req, res) => {
  const { id } = req.params;
  try {
    await knex("assignments").where({ id }).del();
    return res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    console.error("Error deleting assignment:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};