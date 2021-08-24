'use strict';

const {animalsModel} = require('../Modules/Data.Modules');
const adoptionArray = require('../Modules/Animal')
const seedAnimalsData = () => {
    const Animals = new animalsModel({
      animals:adoptionArray,
    });
    // console.log(newBook);
    Animals.save();
  };

  module.exports=seedAnimalsData;