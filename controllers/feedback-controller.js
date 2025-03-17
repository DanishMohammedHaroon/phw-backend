// Dummy in-memory storage for feedbacks
let feedbacks = [];

// Submit feedback for an assignment
export const submitFeedback = (req, res) => {
  const { assignmentId, patientId, status, comments } = req.body;

  // Validate required fields
  if (!assignmentId || !patientId || !status) {
    return res
      .status(400)
      .json({ message: "assignmentId, patientId, and status are required." });
  }

  // Create a new feedback entry
  const newFeedback = {
    id: feedbacks.length + 1,
    assignmentId,
    patientId,
    status, // e.g., "completed", "incomplete", "needs review"
    comments: comments || "",
    timestamp: new Date().toISOString(),
  };

  feedbacks.push(newFeedback);

  return res
    .status(201)
    .json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
};

// (Optional) Retrieve feedback for a given assignment or patient
export const getFeedbacks = (req, res) => {
  // For demonstration, simply return all feedbacks
  return res.status(200).json(feedbacks);
};
