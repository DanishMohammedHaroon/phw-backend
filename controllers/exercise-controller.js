import knex from "../db/knex.js";

// GET all exercises from the database
export const getAllExercises = async (_req, res) => {
  try {

    const exercises = await knex("exercises").select("*");
    return res.status(200).json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// GET exercise by exercise_id
export const getExerciseById = async (req, res) => {
  const { id } = req.params;
  try {

    const exercise = await knex("exercises").where({ exercise_id: id }).first();
    if (!exercise) {
      return res.status(404).json({ message: "Exercise not found" });
    }
    return res.status(200).json(exercise);
  } catch (error) {
    console.error("Error fetching exercise by id:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
