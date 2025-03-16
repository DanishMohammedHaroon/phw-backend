const exercises = [
  {
    id: 1,
    name: "Incline Hammer Curls",
    muscle: "Biceps",
    difficulty: "Beginner",
    instructions: "Sit on an incline bench with a dumbbell in each hand.",
  },
  {
    id: 2,
    name: "Wide-Grip Barbell Curl",
    muscle: "Biceps",
    difficulty: "Beginner",
    instructions:
      "Stand with your feet shoulder-width apart and curl the barbell.",
  },
  {
    id: 3,
    name: "Triceps Dip",
    muscle: "Triceps",
    difficulty: "Intermediate",
    instructions: "Use parallel bars or a bench to perform dips.",
  },
];

// Controller function to get all exercises
export const getAllExercises = (req, res) => {
  res.status(200).json(exercises);
};

// Controller function to get an exercise by ID
export const getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find((ex) => ex.id === parseInt(id, 10));
  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" });
  }
  res.status(200).json(exercise);
};
