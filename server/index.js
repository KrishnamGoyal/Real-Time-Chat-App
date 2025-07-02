const path = require("path");
const result = require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

console.log(MONGO_URI);
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅Connected to MongoDB"))
  .catch((err) => console.log("❌MongoDb connection error", err));

app.listen(PORT, () =>
  console.log(`🚀Server running on http://localhost:${PORT}`)
);
