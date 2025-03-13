
import express from "express";
import cors from "cors";
import "dotenv/config";
import initKnex from "knex";
import config from "./knexfile.js";

const app = express();
const PORT = process.env.PORT || 5050;
const knex = initKnex(config);


// Logging middleware: Logs method and URL for every request
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

// Add routes here

app.get("/", (_req, res) => {
  res.send("PHW Backend is running");
});


// Basic error handling middleware
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send("INternal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
