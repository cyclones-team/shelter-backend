'use strict';

const {charityModel} = require('../Modules/Data.Modules');


async function getCharitiesHandler(request, response) {
      
    const email = request.params.email;
        await charityModel.find({ email }, (error, data) => {
          if (error) {
              console.log('here')
            handleError(error);
          }
          console.log(data)
          response.json(data[0]);
        });
      }
 
 
const addCharityHandler = async (req, res) => {
    charityModel.find({email:req.body.email}, (error, charitiesData) => {
        if (error) {
            res.send(error);
        } else {
            charitiesData.charities.push({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                url: req.body.url,
                logo: req.req.logo,
        
            });
            // console.log(charitiesData.charities);
            charitiesData.save();
            res.json(charitiesData);
        }
    });
};

const deleteCharityHandler = (req, res) => {

    charityModel.findOne({ email: req.query.email }, (error, charitiesData) => {
        if (error) {
            res.send(error)
        } else {
            charitiesData.charities.splice(req.params.id, 1);
            charitiesData.save();
            res.send(charitiesData);
        }
    })
};

const updateCharityHandler = (req, res) => {
    bookModel.findOne({ email: req.body.email }, (error, charitiesData) => {
        if (error) {
            res.send(error)
        } else {
            charitiesData.charities.splice(req.params.id, 1, {
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                url: req.body.url,
                logo: req.req.logo,
            });
            charitiesData.save();
            res.send(charitiesData)
        }
    });
};

module.exports = {
    getCharitiesHandler,
    addCharityHandler,
    deleteCharityHandler,
    updateCharityHandler,
};