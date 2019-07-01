const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request-promise");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res) {
  if (!req.query) res.send("Authing");

  const discordQuery = {
    uri: 'https://discordapp.com/api/oauth2/token',
    transform: (body, response, resolveWithFullResponse) => {
      return response
    },

    headers: {
      'client_id': process.env.WHIPPLE_CLIENT_ID,
      'client_secret': process.env.WHIPPLE_CLIENT_SECRET,
      'grant_type': 'authorization_code',
      'code': req.query.code,
      'redirect_uri': process.env.REDIRECT_URI,
      'scope': 'identify email connections'
    },
    json: true
  };

  request(discordQuery)
  .then(data => res.send(data))
  .catch(data => res.send(data));
});

module.exports = {
path: "/api/login",
handler: app
};
