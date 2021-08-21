'use strict';

const endangeredAnimalsModel = require('../Modules/Data.Modules');

const getEndangeredAnimalsHandler = (req, res) => {
    endangeredAnimalsModel.find({}, (err, endangeredAnimalsData) => {
        if (err) {
            res.send(err)
        } else {
            res.json(endangeredAnimalsData)
        }
    });
};

module.exports = getEndangeredAnimalsHandler;