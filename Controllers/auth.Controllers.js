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

const authHandler = (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, getKey, {}, (err, user) => {
        if (err) {
            res.send("invalid token");
        }
        res.send(user);
        console.log("Hello World");
    });
}
module.exports = authHandler;