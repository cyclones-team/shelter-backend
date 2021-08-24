const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const client = jwksClient({
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

const getKey = (header, callback) => {
    client.getSigningKey(header.kid, function (err, key) {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
    });
};
const { charityModel } = require('../Modules/Data.Modules');
const charitiesData = require("../Modules/charities.json")
const authHandler = (req, res) => {
    let useremail = req.params.email
 
    charityModel.find({ email: useremail }, (err, data) => {

        if (err) {
            console.error(err);
        } else {
            if (!data.length > 0) {
                console.log('here')
                const Charity = new charityModel({
                    email: useremail,
                    charities: charitiesData,
                });
                Charity.save();
              
            } else { console.log('here1'); }
        }
    })
};

module.exports = authHandler;