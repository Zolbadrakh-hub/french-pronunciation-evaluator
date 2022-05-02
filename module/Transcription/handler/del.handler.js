
const asyncHandler = require("express-async-handler");
const Transcription = require("../../../models/transcription");


module.exports = asyncHandler(async (req, res) => {
  await Transcription.findOneAndDelete(req.params.id);
  res.send({ data: "success" });
});
