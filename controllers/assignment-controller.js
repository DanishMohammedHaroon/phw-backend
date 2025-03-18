import knex from "../db/knex.js";
// Dummy in-memory storage for assignments
let assignments = [];

// Create a new assignment
export const createAssignment = (req, res) => {
  const {
    physiotherapistId,
    patientId,
    exerciseId,
    repetitions,
    sets,
    difficulty,
    instructions,
  } = req.body;

  // Basic validation
  if (!physiotherapistId || !patientId || !exerciseId) {
    return res.status(400).json({
      message: "physiotherapistId, patientId, and exerciseId are required.",
    });
  }

  // Create a new assignment (In a real app, you'd add timestamps etc.)
  const newAssignment = {
    id: assignments.length + 1,
    physiotherapistId,
    patientId,
    exerciseId,
    repetitions: repetitions || 0,
    sets: sets || 0,
    difficulty: difficulty || "N/A",
    instructions: instructions || "",
  };

  assignments.push(newAssignment);

  return res.status(201).json({
    message: "Assignment created successfully",
    assignment: newAssignment,
  });
};

// Retrieve all assignments
export const getAssignments = (req, res) => {
  return res.status(200).json(assignments);
};
