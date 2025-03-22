import knex from "../db/knex.js";

const formatDateTime = (isoString) =>
  isoString.replace("T", " ").substring(0, 19);

//POST feedback
export const submitFeedback = async (req, res) => {
  const { patientId, physiotherapistId, status, comments } = req.body;


  if (!patientId || !physiotherapistId || !status) {
    return res.status(400).json({
      message: "patientId, physiotherapistId, and status are required.",
    });
  }

  try {

    const client = await knex("users")
      .where({ id: patientId, role: "client" })
      .first();

    if (!client) {
      return res.status(404).json({ message: "Client not found." });
    }
    if (client.physiotherapistId !== physiotherapistId) {
      return res
        .status(403)
        .json({ message: "Client is not assigned to this physiotherapist." });
    }

    const [id] = await knex("feedbacks").insert({
      patientId,
      physiotherapistId,
      status,
      comments: comments || "",
      timestamp: formatDateTime(new Date().toISOString()),
    });

    const newFeedback = await knex("feedbacks").where({ id }).first();
    return res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//GET all feedbacks 
export const getFeedbacks = async (_req, res) => {
  try {
    const feedbacks = await knex("feedbacks").select("*");
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error retrieving feedbacks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//GET feedback by physiotherapistId
export const getFeedbackByPhysio = async (req, res) => {
  const { physiotherapistId } = req.query;
  if (!physiotherapistId) {
    return res
      .status(400)
      .json({ message: "physiotherapistId query parameter is required." });
  }
  try {
    const feedbacks = await knex("feedbacks").where({ physiotherapistId });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
