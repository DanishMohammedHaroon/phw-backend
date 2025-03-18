import knex from "../db/knex.js";

// Get all exercises from the database
export const getAllExercises = async (req, res) => {
  try {
    // Select all columns from the "exercises" table
    const exercises = await knex("exercises").select("*");
    return res.status(200).json(exercises);
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get a single exercise by its exercise_id
export const getExerciseById = async (req, res) => {
  const { id } = req.params;
  try {
    // Assuming the unique identifier is stored in the "exercise_id" column
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
