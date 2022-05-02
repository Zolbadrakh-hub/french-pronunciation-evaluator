const express = require("express");
const route = new express.Router();
const { id, create, list, delList, get, update, del } = require("./handler");

route.post("/",  create);
route.get("/", list);
route.delete("/", delList);
route.get("/:id", id, get);
route.put("/:id", id, update);
route.delete("/:id", id, del);

module.exports = route;
