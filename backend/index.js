const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const pushlocation = require("./Route/locatioRoute.js");
const mongoConnection = require("./Config/mongo.js");
const app = express();

// Use middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/", pushlocation);

app.listen(8000, () => {
  mongoConnection();
  console.log("Server is running on port 8000");
});
