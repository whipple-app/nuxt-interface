const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res) {
res.send("HelloWorld");
});

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).json({ 'message': req.body })
})

module.exports = {
path: "/api/login",
handler: app
};
