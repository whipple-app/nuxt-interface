const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request-promise");
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", async function(req, res) {
  if (!req.query.code) {
    res.redirect('/');
    return
  };

  console.log(req.query.code);

  const discordQuery = {
    method: 'POST',
    uri: process.env.API_URI,
    transform: (body, response, resolveWithFullResponse) => {
      return response
    },
    body: {
      'client_id': process.env.WHIPPLE_CLIENT_ID,
      'client_secret': process.env.WHIPPLE_CLIENT_SECRET,
      'grant_type': 'authorization_code',
      'code': req.query.code,
      'redirect_uri': process.env.REDIRECT_URI,
      'scope': 'identify email',
    },
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
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
