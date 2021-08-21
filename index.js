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
const seedAnimalsData = require('./Controllers/seedAnimalsData.controllers');
const seedCharitysData = require('./Controllers/seedCharityData.controllers');
const seedEndangeredAnimalsData = require('./Controllers/seedEndangered.controllers')
const {
  getCharitiesHandler,
  addCharityHandler,
  deleteCharityHandler,
  updateCharityHandler,
} = require('./Controllers/charity.Controllers');
const getEndangeredAnimalsHandler=require('./Controllers/endangeredAnimals.controllers')

mongoose.connect(process.env.MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", liveHandler);
app.get("/auth", authHandler);
app.get('/charity', getCharitiesHandler);
app.post('/charity',addCharityHandler);
app.delete('/charity/:id',deleteCharityHandler);
app.put('/charity/:id',updateCharityHandler);
app.get('/endangered',getEndangeredAnimalsHandler);

// seedAnimalsData();
// seedCharitysData();
// seedEndangeredAnimalsData();

app.listen(PORT, () => {
  console.log(`you can find me a live at ${PORT}`);
});
