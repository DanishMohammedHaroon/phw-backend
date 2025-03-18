// Dummy in-memory storage for messages
let messages = [];

// Controller to send a new message
export const sendMessage = (req, res) => {
  const { from, to, message } = req.body;

  // Basic validation: Ensure all required fields are present
  if (!from || !to || !message) {
    return res
      .status(400)
      .json({ message: "from, to, and message fields are required." });
  }

  const newMessage = {
    id: messages.length + 1,
    from,
    to,
    message,
    timestamp: new Date().toISOString(),
  };

  messages.push(newMessage);
  return res
    .status(201)
    .json({ message: "Message sent successfully", data: newMessage });
};

// Controller to get messages for a specific user (by user id in query)
export const getMessages = (req, res) => {
  const { userId } = req.query;
  if (!userId) {
    return res
      .status(400)
      .json({ message: "userId query parameter is required." });
  }

  // Filter messages where the user is either sender or recipient
  const userMessages = messages.filter(
    (msg) => msg.from === userId || msg.to === userId
  );
  return res.status(200).json(userMessages);
};
