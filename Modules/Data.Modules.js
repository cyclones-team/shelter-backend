'use strict';

const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
    email: { type: String },
    animals: [{
        name: { type: String },
        description: { type: String },
    }],
});

const animalsModel = mongoose.model('animal', animalSchema);

const charitySchema = new mongoose.Schema({
    email: { type: String },
    charities: [{
        name: { type: String },
        description: { type: String },
        address:{type:String},
        url:{type:String},
    }],
});

const charityModel = mongoose.model('charity', charitySchema);

module.exports = {animalsModel,charityModel};