'use strict';

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + "/views/partials/",
    layoutsDir: __dirname + "/views/layouts/",
    extname: ".hbs",
  })
);

app.use(express.static(__dirname + "/public"));


const Content = require("./models/content");

app.get("/", async (req, res) => {
  const mainContentData = await Content.find().lean(); 
  res.render("index", {mainContentData});
});


module.exports = app;