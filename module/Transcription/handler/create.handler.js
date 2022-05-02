const asyncHandler = require("express-async-handler");
const Transcription = require("../../../models/transcription");

module.exports = asyncHandler(async (req, res) => {
  const data = new Transcription(req.body);
  await data.save();
  //count
  //ustgah
  res.send({ data });
});