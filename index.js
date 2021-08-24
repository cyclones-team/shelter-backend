'use strict';
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(express.static('public'));

const liveHandler = require('./Controllers/live.Controllers');
const authHandler = require('./Controllers/auth.Controllers');
const seedAnimalsData = require('./Controllers/seedAnimalsData.controllers');
const seedEndangeredAnimalsData = require('./Controllers/seedEndangered.controllers')
const {
  getCharitiesHandler,
  addCharityHandler,
  deleteCharityHandler,
  updateCharityHandler,
} = require('./Controllers/charity.Controllers');

const getEndangeredAnimalsHandler = require('./Controllers/endangeredAnimals.controllers')
const {adoptionHandler,deleteHandler} = require('./Controllers/adoption.controllers');
mongoose.connect(process.env.MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", liveHandler);
app.get("/auth/:email", authHandler);
app.get('/charity/:email', getCharitiesHandler);
app.post('/charity', addCharityHandler);
app.delete('/charity/:id', deleteCharityHandler);
app.put('/charity/:id', updateCharityHandler);
app.get('/endangered', getEndangeredAnimalsHandler);
app.get('/adopte', adoptionHandler);
app.delete('/adopte/:id', deleteHandler);

// seedAnimalsData();
// seedEndangeredAnimalsData();

app.listen(process.env.PORT || 3050, () => {
  console.log(`you can find me a live at ${PORT}`);
});
