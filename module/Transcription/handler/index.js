const create = require("./create.handler");
const get = require("./get.handler");
const update = require("./update.handler");
const del = require("./del.handler");
const list = require("./list.handler");
const delList = require("./delList.handler");
const id = require("./id.handler");

module.exports = {
  id,
  create,
  get,
  update,
  del,
  list,
  delList
};
