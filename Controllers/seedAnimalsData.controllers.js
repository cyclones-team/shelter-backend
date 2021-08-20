'use strict';

const {animalsModel} = require('../Modules/Data.Modules');

const seedAnimalsData = () => {
    const Animals = new animalsModel({
      email: "renadsalem8888@gmail.com",
      animals: [
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
        { title: "Lion", description: "King of the jungle" },
        { title: "tiger", description: "kill mawgli" },
        { title: "crocodile", description: "hard to kill" },
      ],
    });
    // console.log(newBook);
    Animals.save();
  };

  module.exports=seedAnimalsData;