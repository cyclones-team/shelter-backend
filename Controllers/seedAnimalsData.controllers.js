'use strict';

const { animalsModel } = require('../Modules/Data.Modules');
const adoptionArray = require('../Modules/Animal')
const seedAnimalsData = () => {
  const Animals = new animalsModel({
    animals: adoptionArray,
  });
  Animals.save();
};

module.exports = seedAnimalsData;