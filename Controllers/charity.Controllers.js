'use strict';

const { charityModel } = require('../Modules/Data.Modules');

async function getCharitiesHandler(request, response) {

    const email = request.params.email;
    await charityModel.find({ email }, (error, data) => {
        if (error) {
            console.log('here')
           resp
        }
        response.json(data[0]);
    });
}
const addCharityHandler = async (req, res) => {
    const email = req.query.email;
    console.log(email,req.query.name,req.query.description,req.query.address,req.query.url,req.query.logo);
    // charityModel.updateOne({email},{$push:{charities:{
    //     name: req.query.name,
    //     description: req.query.description,
    //     address: req.query.address,
    //     url: req.query.url,
    //     logo: req.query.logo,
    // }}}).save() 
    // ; 
  await charityModel.find({email},(error, charitiesData) => {
        if (error) {
            res.send(error);
        } else {
            console.log(charitiesData);
            let data ={
                "name":`${ req.query.name}`,
                "description": `${req.query.description}`,
                "address": `${req.query.address}`,
                "url": `${req.query.url}`,
                "logo": `${req.query.logo}`,
            }
            console.log(data);
            charitiesData.charities.push(data);
            console.log(charitiesData);
           charityModel.save();
            res.json(charityModel);
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
    let email = req.query.email
    charityModel.findOne({ email: email }, (error, charitiesData) => {
        if (error) {
            res.send(error)
        } else {
            charitiesData.charities.splice(req.params.id, 1, {
                name: req.query.name,
                description: req.query.description,
                address: req.query.address,
                url: req.query.url,
                logo: req.query.logo,
            });
            charitiesData.save();
            res.json(charitiesData);
        }
    });
};

module.exports = {
    getCharitiesHandler,
    addCharityHandler,
    deleteCharityHandler,
    updateCharityHandler,
};