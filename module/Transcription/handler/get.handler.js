const asyncHandler = require("express-async-handler");

module.exports = asyncHandler(async (req, res) => {
  res.send({ data: req.transcription });
});
