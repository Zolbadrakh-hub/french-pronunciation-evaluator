const express = require("express");
const route = new express.Router();
const { uploadSingleFile, get } = require("./handler");

route.post("/",  uploadSingleFile);
route.get("/", get );

module.exports = route;
