'use strict';

const { Schema, model } = require("mongoose");

const ContentSchema = new Schema(
  {
    img: {
      type: String,
    },
    imgAlt: {
      type: String,
    },
    price: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  
);

module.exports = model("Content", ContentSchema, "mainContentData");
