require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");
const mongoose = require("mongoose");
app.use(cors());

mongoose.connect(process.env.MONGO_ATLAS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const client = jwksClient({
  // this url comes from your app on the auth0 dashboard
  jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

// this is a ready to use function
const getKey = (header, callback) => {
  client.getSigningKey(header.kid, function (err, key) {
    const signingKey = key.publicKey || key.rsaPublicKey;
    callback(null, signingKey);
  });
};
app.get("/", (req, res) => {
  res.send("working well....");
});

app.get("/auth", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, getKey, {}, (err, user) => {
    if (err) {
      res.send("invalid token");
    }
    res.send(user);
    console.log("Hello World");
  });
});

app.listen(PORT, () => {
  console.log(`you can find me a live at ${PORT}`);
});
