const routes = require("express").Router();

routes.use("/api", require("./api"));

routes.all("*", (req, res) => {
  res.status(404).send({ msg: "Wrong route!" });
});

module.exports = routes;
