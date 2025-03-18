import knex from "../db/knex.js";

// Submit feedback for an assignment using Knex
export const submitFeedback = async (req, res) => {
  const { assignmentId, patientId, status, comments } = req.body;

  if (!assignmentId || !patientId || !status) {
    return res
      .status(400)
      .json({ message: "assignmentId, patientId, and status are required." });
  }

  try {
    // Insert new feedback entry into the "feedbacks" table
    const [id] = await knex("feedbacks").insert({
      assignmentId,
      patientId,
      status,
      comments: comments || "",
      timestamp: new Date().toISOString(),
    });
    // Retrieve the newly inserted feedback
    const newFeedback = await knex("feedbacks").where({ id }).first();
    return res
      .status(201)
      .json({
        message: "Feedback submitted successfully",
        feedback: newFeedback,
      });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Retrieve all feedbacks (or you can add filtering later)
export const getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await knex("feedbacks").select("*");
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error retrieving feedbacks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
