'use strict';

const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    animals: [{
        name: { type: String },
        description: { type: String },
        age: { type: String },
        breeds: { type: String },
        gender: { type: String },
        picture: { type: String },
        id: { type: Number },
        type: { type: String },
        size: { type: String },
    }],
});

const animalsModel = mongoose.model('animal', animalSchema);

const charitySchema = new mongoose.Schema({
    email: { type: String },
    charities: [{
        name: { type: String },
        description: { type: String },
        address: { type: String },
        url: { type: String },
        logo: { type: String },
    }],
});


const charityModel = mongoose.model('charities', charitySchema);

const endangeredAnimalsSchema = new mongoose.Schema({
    endangeredAnimals: [{
        name: { type: String },
        description: { type: String },
        home: { type: String },
        image_url: { type: String },
    }],
});

const endangeredAnimalsModel = mongoose.model('endangeredAnimal', endangeredAnimalsSchema);

module.exports = {
    animalsModel,
    charityModel,
    endangeredAnimalsModel,
};