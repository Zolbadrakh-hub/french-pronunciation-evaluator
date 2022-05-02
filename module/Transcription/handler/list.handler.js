const asyncHandler = require("express-async-handler");
const Transcription = require("../../../models/transcription");

module.exports = asyncHandler(async (req, res) => {
  const data = await Transcription.findAll();
  //const totalCount = await Transcription.countDocuments(where);
  //res.setHeader("x-total-count", totalCount);
  res.send({ data });
});
