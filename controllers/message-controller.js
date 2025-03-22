import knex from "../db/knex.js";

const formatDateTime = (isoString) =>
  isoString.replace("T", " ").substring(0, 19);

//POST message
export const sendMessage = async (req, res) => {
  const { from, to, message, timestamp } = req.body;

  if (!from || !to || !message || !timestamp) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const [id] = await knex("messages").insert({
      from: String(from),
      to: String(to), 
      message,
      timestamp: formatDateTime(timestamp),
    });
    const newMessage = await knex("messages").where({ id }).first();
    return res
      .status(201)
      .json({ message: "Message sent successfully", messageData: newMessage });
  } catch (error) {
    console.error("Error inserting message:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//GET message filtered by specific user
export const getMessages = async (req, res) => {
  const { clientId, physioId } = req.query;
  if (!clientId || !physioId) {
    return res
      .status(400)
      .json({
        message: "clientId and physioId query parameters are required.",
      });
  }
  try {
    const messages = await knex("messages")
      .where(function () {
        this.where({ from: clientId, to: physioId }).orWhere({
          from: physioId,
          to: clientId,
        });
      })
      .orderBy("timestamp", "asc");
    return res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

