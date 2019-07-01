const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request-promise");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", async function(req, res) {
  if (!req.query.code) {
    res.send("Authing")
    return
  };

  const discordQuery = {
    method: 'POST',
    uri: 'https://discordapp.com/api/v6/auth2/token',
    transform: (body, response, resolveWithFullResponse) => {
      return response
    },

    body: {
      'client_id': process.env.WHIPPLE_CLIENT_ID,
      'client_secret': process.env.WHIPPLE_CLIENT_SECRET,
      'grant_type': 'authorization_code',
      'code': req.query.code,
      'redirect_uri': process.env.REDIRECT_URI,
      'scope': 'identify email connections',
    },

    headers: {},
    json: true
  };

  await request(discordQuery)
  .then(data => res.send(data))
  .catch(data => res.send(data));
});

module.exports = {
  path: "/api/login",
  handler: app
};
