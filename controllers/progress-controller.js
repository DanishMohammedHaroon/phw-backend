// Dummy in-memory storage for progress logs
let progressLogs = [];

// Controller to log new progress
export const addProgressLog = (req, res) => {
  const { patientId, logDate, performanceData } = req.body;

  // Validate required fields
  if (!patientId || !logDate || !performanceData) {
    return res
      .status(400)
      .json({
        message: "patientId, logDate, and performanceData are required.",
      });
  }

  const newLog = {
    id: progressLogs.length + 1,
    patientId,
    logDate,
    performanceData,
  };

  progressLogs.push(newLog);

  return res
    .status(201)
    .json({ message: "Progress log added successfully", progress: newLog });
};

// Controller to retrieve progress logs for a patient
export const getProgressLogs = (req, res) => {
  const { patientId } = req.query;

  if (!patientId) {
    return res
      .status(400)
      .json({ message: "patientId query parameter is required." });
  }

  // Filter logs for the specified patient
  const logs = progressLogs.filter((log) => log.patientId === patientId);
  return res.status(200).json(logs);
};
