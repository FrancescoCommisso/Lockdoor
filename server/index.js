const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(pino);
app.use(express.static(path.join(__dirname, "../client/build")));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// const routes = require("./routes");
// app.use("/", routes());

app.get("/test", (req, res) => {
  res.send({ message: "hello" });
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"), function(
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
