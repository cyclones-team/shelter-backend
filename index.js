'use strict';
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());

const liveHandler = require('./Controllers/live.Controllers');
const authHandler = require('./Controllers/auth.Controllers');
const seedAnimalsData = require('./Controllers/seedAnimalsData.controllers')
mongoose.connect(process.env.MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", liveHandler);
app.get("/auth", authHandler);
// seedAnimalsData();
app.listen(PORT, () => {
  console.log(`you can find me a live at ${PORT}`);
});
