import knex from "../db/knex.js";

// Send a new message using Knex
// export const sendMessage = async (req, res) => {
//   const { from, to, message } = req.body;

//   if (!from || !to || !message) {
//     return res
//       .status(400)
//       .json({ message: "from, to, and message fields are required." });
//   }

//   try {
//     const [id] = await knex("messages").insert({
//       from,
//       to,
//       message,
//       timestamp: new Date().toISOString(),
//     });
//     const newMessage = await knex("messages").where({ id }).first();
//     return res
//       .status(201)
//       .json({ message: "Message sent successfully", data: newMessage });
//   } catch (error) {
//     console.error("Error sending message:", error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// };

const formatDateTime = (isoString) =>
  isoString.replace("T", " ").substring(0, 19);

export const sendMessage = async (req, res) => {
  const { from, to, message, timestamp } = req.body;

  if (!from || !to || !message || !timestamp) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const [id] = await knex("messages").insert({
      from: String(from), // Convert to string if needed
      to: String(to), // Convert to string if needed
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

// Retrieve messages for a specific user
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

