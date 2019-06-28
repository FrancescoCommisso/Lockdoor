const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const Checker = require("./checker.js");

//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../client/build")));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//Our only api endpoint
app.post("/api/checkDistance", (req, res) => {
  let checker = new Checker();
  res.send({ atHome: checker.checkDistance(req.body) });
});

//Serve Content
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
