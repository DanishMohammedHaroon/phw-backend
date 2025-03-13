
import express from "express";
import cors from "cors";
import "dotenv/config";
import initKnex from "knex";
import config from "./knexfile.js";

const app = express();
const PORT = process.env.PORT || 5050;
const knex = initKnex(config);

app.use(cors());
app.use(express.json());

// Add routes here

app.get("/", (_req, res) => {
  res.send("PHW Backend is running");
});


// Basic error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
