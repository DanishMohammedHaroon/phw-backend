import knex from "../db/knex.js";

// Send a new message using Knex
export const sendMessage = async (req, res) => {
  const { from, to, message } = req.body;

  if (!from || !to || !message) {
    return res
      .status(400)
      .json({ message: "from, to, and message fields are required." });
  }

  try {
    const [id] = await knex("messages").insert({
      from,
      to,
      message,
      timestamp: new Date().toISOString(),
    });
    const newMessage = await knex("messages").where({ id }).first();
    return res
      .status(201)
      .json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Retrieve messages for a specific user
export const getMessages = async (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res
      .status(400)
      .json({ message: "userId query parameter is required." });
  }
  try {
    const userMessages = await knex("messages")
      .where("from", userId)
      .orWhere("to", userId);
    return res.status(200).json(userMessages);
  } catch (error) {
    console.error("Error retrieving messages:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
