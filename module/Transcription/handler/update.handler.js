const asyncHandler = require("express-async-handler");

module.exports = asyncHandler(async (req, res) => {
  Object.keys(req.body).forEach((key) => {
    req.transcription[key] = req.body[key];
  });
  await req.transcription.save();
  res.send({ data: req.transcription });
});
