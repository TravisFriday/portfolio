//Modules
const express = require("express");
const bodyParser = require("body-parser");
const apiRoute = require("./routes/api");

//Instantiation
const app = express();

app.use(bodyParser.json());

app.use(
  //allows us to parse nested objects
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/api", apiRoute);

app.listen("8001");
