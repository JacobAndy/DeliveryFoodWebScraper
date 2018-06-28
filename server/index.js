require("dotenv").config();
const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  cors = require("cors"),
  PORT = process.env.PORT || 3001;

app.use(json());
app.use(cors());

app.listen(PORT, () => console.log(`Magic Happens On Port ${PORT}`));
