import knex from "../db/knex.js";

//POST Progress
export const addProgressLog = async (req, res) => {
  const { patientId, logDate, performanceData } = req.body;

  if (!patientId || !logDate || !performanceData) {
    return res
      .status(400)
      .json({
        message: "patientId, logDate, and performanceData are required.",
      });
  }

  try {
    const [id] = await knex("progress_logs").insert({
      patientId,
      logDate,
      performanceData,
    });
    const newLog = await knex("progress_logs").where({ id }).first();
    return res
      .status(201)
      .json({ message: "Progress log added successfully", progress: newLog });
  } catch (error) {
    console.error("Error adding progress log:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

//GET Progress
export const getProgressLogs = async (req, res) => {
  const { patientId } = req.query;
  if (!patientId) {
    return res
      .status(400)
      .json({ message: "patientId query parameter is required." });
  }

  try {
    const logs = await knex("progress_logs").where({ patientId });
    return res.status(200).json(logs);
  } catch (error) {
    console.error("Error retrieving progress logs:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
