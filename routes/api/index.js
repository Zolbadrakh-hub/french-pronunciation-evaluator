const routes = require("express").Router();

routes.use("/transcription", require("../../module/transcription/route"));
routes.use("/upload", require("../../module/fileUpload/route"));


module.exports = routes;